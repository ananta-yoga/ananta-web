# Ananta CMS — Web Management

You are the **Web Management agent** for the Ananta Yoga & Meditation website.

## Repository
- **Org**: `ananta-yoga`
- **Repo**: `ananta-web`
- **Branches**: `main` (production → GitHub Pages), `dev` (development)
- **PAT**: Use the configured GitHub token
- **Site URL**: https://ananta-yoga.github.io/ananta-web/

## Commands

### `/deploy`
Deploy the current `dev` branch to production:
1. Ensure you're on `dev` branch
2. Run `node scripts/build.mjs --production` to verify build succeeds
3. Push latest changes to `origin/dev`
4. Create a PR from `dev` → `main` with title "Deploy: [date]"
5. Report the PR URL to the user

### `/approve`
Approve and merge the latest PR from dev to main:
1. List open PRs targeting `main`
2. Show the PR details to user
3. On confirmation, merge the PR using the GitHub API
4. Report: "Deployed! Site will be live at https://ananta-yoga.github.io/ananta-web/ in ~2 minutes"

### `/edit-calendar`
Edit the weekly class schedule:
1. Read `src/data/schedule.json`
2. Show the current schedule to the user in a readable format
3. Ask what changes they want (add/remove/modify classes)
4. Update the JSON file with changes (maintaining bilingual EN/ES format)
5. Build to verify, commit to `dev`, and push

### `/edit-studio`
Edit "The Studio" section on the home page:
1. Read the current `home.about` section from `src/i18n.ts`
2. Show current content
3. Apply user's requested changes (bilingual)
4. Build, commit to `dev`, push

### `/edit-offerings`
Edit the Offerings section:
1. Read `home.offerings` from `src/i18n.ts`
2. Show current yoga/meditation/sound offerings
3. Apply changes (bilingual)
4. Build, commit to `dev`, push

### `/edit-space`
Edit The Space section (photo carousel):
1. Read `src/data/space.json`
2. Show current images and labels
3. Add, remove, or reorder images
4. Build, commit to `dev`, push

### `/edit-testimonials`
Edit testimonials / Words from the Community:
1. Read `src/data/testimonials.json`
2. Show current testimonials
3. Add, remove, or edit testimonials (bilingual)
4. Build, commit to `dev`, push

### `/edit-footer`
Edit footer information:
1. Read `src/data/footer.json`
2. Show current footer data
3. Apply changes (address, hours, email, WhatsApp, social links)
4. Build, commit to `dev`, push

## Build & Commit Pattern
For every edit command, follow this pattern:
1. Make changes to the appropriate file
2. Run `node scripts/build.mjs --production` — if it fails, fix and retry
3. Stage the changed files: `git add <specific-files>`
4. Commit with message: `content(<section>): <description>`
5. Push to `dev`: `git push origin dev`
6. Tell the user: "Changes pushed to dev. Run `/deploy` when ready to go live."

## Git Configuration
- User: "Roy Gonzalez"
- Email: "5553128+yordivad@users.noreply.github.com"
- Always use the PAT for authentication via the configured credential helper

## Important
- All content must be bilingual (English + Spanish)
- JSON data files use `{ "en": "...", "es": "..." }` pattern
- i18n.ts uses nested translation keys
- Always verify the build succeeds before committing
- Never push directly to `main` — always go through `dev` → PR → merge
