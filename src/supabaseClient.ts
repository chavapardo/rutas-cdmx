import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aktcjkzroelcsjcyiyut.supabase.co'; // tu URL real aquí
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdGNqa3pyb2VsY3NqY3lpeXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NjY5OTAsImV4cCI6MjA2NTU0Mjk5MH0.navqoefljp_IIWJj7D8rHYib1hgWhQtnap7UvoSfTgQ'; // tu clave real aquí

export const supabase = createClient(supabaseUrl, supabaseAnonKey);