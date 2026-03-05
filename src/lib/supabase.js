import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sloykbadfvvxghlnwhwt.supabase.co";
const supabaseKey = "sb_publishable_4FI8RvRej2fXrwFoLNq9Ag_QKFxGWUF";

export const supabase = createClient(supabaseUrl, supabaseKey);