
# Flatfile Extractor Listener
Use this quickstart library to deploy a simple listener agent to Flatfile that will add support for processing XLSX files to your Flatfile Simplified Javascript / CDN Portals.

### Quick-start Instructions

1. Clone this repository
2. Create a `.env` file in the project root using the `.env.example` file as a template, populating `FLATFILE_API_KEY` and `FLATFILE_ENVIRONMENT_ID` with the values from your Flatfile account
3. Run the command `npm install`
4. Run the command `npx flatfile@latest deploy src/index.js`


# Detailed Instructions

### 1. Establish Access

After you create your account in Flatfile, we create a **Environment ID**, a **Publishable Key**, and a **Secret Key** for you. You will need this information to configure your environment.

1. [Sign up](https://platform.flatfile.com) or [Sign in](app.flatfile.com) to Flatfile.
2. [Locate](https://platform.flatfile.com/dashboard/keys-and-secrets) your Flatfile **Environment ID** and **Secret Key** and write it down.


### 2. Configure your environment

1. Create a `.env` file in the project root using the `.env.example` file as a template.
2. Add the **Secret Key** to your `.env` file as the `FLATFILE_API_KEY` variable
4. Add the **Environment ID** to your `.env` file as the `FLATFILE_ENVIRONMENT_ID` variable
6. If you are using a different geographic region of Flatfile, update the API URL in your `.env` file as the `FLATFILE_API_URL` variable. This variable is optional, and defaults to our US region unless a different value is included in your `.env` file


### 3. Deploy the listener Flatfile

1. Run the command `npx flatfile@latest deploy src/index.js`

This only needs to be deployed one time for an environment, and then the listener will be used by all [Portals](https://flatfile.com/docs/apps/embedding/javascript/new_space_quickstart) referencing this environment via your publishable key.

If you have more than one environment, be sure to deploy this listener to each environment, by updating the values in your `.env` file and running the deploy command above.

## Support for Additional File Types

This repository adds support for processing XLSX files by default. You may easily add support for additional file using one of the extractors available from Flatfile (or creating your own!) [View additional extractors here](https://flatfile.com/docs/plugins/overview)

1. Install - add the desired plugin to your library with a command like `npm i @flatfile/plugin-json-extractor`
2. Import - add the correct import statement to the `src/index.js` file, like `import { JSONExtractor } from "@flatfile/plugin-json-extractor";`
3. Add to Listener - add the correct listener.use call to `src/index.js`, like `listener.use(JSONExtractor());`

The index.js listener may contain multiple listener.use() calls, and each one will add support for parsing that file format.