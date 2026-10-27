# Atlantic Fieldnotes

An evolving field guide to birds and birding places along Ireland’s western
shore. Field notes are not published yet; the site currently introduces the
coast and a small, credited selection of local bird photography.

Website: [d2tglpuqrd98uu.cloudfront.net](https://d2tglpuqrd98uu.cloudfront.net)

## 🚀 Project Structure

The site is built with Astro. Its main folders and files are:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page
is exposed as a route based on its file name.

Reusable site components live in `src/components/`.

The `src/content/` directory contains Markdown and MDX content collections.
See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/).
The original starter articles are retained as drafts and are not published in
post routes or the RSS feed. Remove `draft: true` from a post when it is ready
to publish.

Static assets and the locally stored bird photographs are in `src/assets/` and
`public/`.

## Photography credits

The bird photographs are used under the licenses linked with their captions:

| Photograph | Photographer | License |
| --- | --- | --- |
| [Puffin, Skellig Michael](https://commons.wikimedia.org/wiki/File:Puffin_Skellig_Michael_2015.jpg) | Sascha Wenninger | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/) |
| [Fulmars, Clashmealcon cliffs](https://commons.wikimedia.org/wiki/File:DM2026_Fulmars_nexting_on_Clashmealcon_cliffs.jpg) | Dm4244 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| [Curlew, Dingle Peninsula](https://commons.wikimedia.org/wiki/File:Curlew-1013817,_Dingle_Peninsula,_Co._Kerry,_Ireland.jpg) | Maoileann | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |
| [Cormorant and heron, Tralee Bay](https://commons.wikimedia.org/wiki/File:Cormorant_%26_Heron-3091,_Tralee_Bay,_Co._Kerry,_Ireland.jpg) | Maoileann | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) |

Images are resized for display. Captions link to each original file and license.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploying to AWS

The site is hosted as static files in S3 behind CloudFront. Push changes to the
`main` branch to run the GitHub Actions deployment workflow, which builds the
site, deploys the CDK stack, uploads `dist/`, and invalidates the CloudFront
cache. Check the workflow run in the repository's **Actions** tab if the live
site has not updated. The repository must have the `AWS_ACCESS_KEY_ID` and
`AWS_SECRET_ACCESS_KEY` Actions secrets configured.

## 👀 Want to learn more?

Check out [Astro documentation](https://docs.astro.build).

## Credit

The base stylesheet is adapted from [Bear Blog](https://github.com/HermanMartinus/bearblog/)'s default CSS, licensed under MIT.
