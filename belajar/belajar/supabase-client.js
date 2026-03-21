// ============================================================
//  supabase-client.js — Inisialisasi koneksi Supabase
// ============================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://rfigimimnlngsitghtnb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmaWdpbWltbmxuZ3NpdGdodG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwNjY5MTksImV4cCI6MjA4OTY0MjkxOX0._SbR_eccjRCHOdz3ZeWdnqdIqShuIZ396jvgSom9wTk';

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});
