create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  country text,
  phone text,
  email text not null,
  service_type text not null,
  budget_range text,
  project_description text not null,
  source text not null default 'website',
  status text not null default 'new'
    check (status in ('new','contacted','qualified','proposal_sent','won','lost')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);

alter table public.leads enable row level security;

-- No public read/update/delete policies.
-- Recommended submission:
-- browser -> Next.js server -> server-only Supabase service role.
-- Never expose SUPABASE_SERVICE_ROLE_KEY in client code.

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();
