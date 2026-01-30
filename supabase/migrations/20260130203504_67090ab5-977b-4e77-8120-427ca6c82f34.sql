-- Create a table for user-submitted restaurant suggestions
CREATE TABLE public.restaurant_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  restaurant_name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'south-africa',
  phone TEXT,
  website TEXT,
  hours TEXT,
  specialty TEXT,
  overview TEXT,
  cuisine_types TEXT[],
  venue_type TEXT NOT NULL DEFAULT 'restaurant',
  celiac_safe TEXT NOT NULL DEFAULT 'protocols-in-place',
  menu_type TEXT NOT NULL DEFAULT 'mixed-menu',
  pro_tip TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.restaurant_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit a restaurant"
ON public.restaurant_submissions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own submissions"
ON public.restaurant_submissions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own pending submissions"
ON public.restaurant_submissions
FOR UPDATE
USING (auth.uid() = user_id AND status = 'pending');

-- Add trigger for updated_at
CREATE TRIGGER update_restaurant_submissions_updated_at
BEFORE UPDATE ON public.restaurant_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();