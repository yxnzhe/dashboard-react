import { createClient } from '@supabase/supabase-js'

const project_url = process.env.REACT_APP_SUPABASE_PROJECT_URL
const anon_key = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(project_url, anon_key)