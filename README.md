# Axyen_test

This is the Axyen_test repository.

## Get the list of files changed in a Pull Request using GitHub Actions

You can retrieve and print the list of files changed in a Pull Request (PR) by running a GitHub Actions workflow that calls the GitHub REST API. This is useful for:

- Validating which files were touched (e.g., only docs, only specific directories)
- Driving conditional checks (e.g., run tests only when certain paths change)
- Producing a clear audit/log output for reviewers and CI

### Purpose

This workflow fetches the changed file paths for the current Pull Request using the GitHub REST API and prints:

- Each changed file panth (one per line)
- The total number of changed files

### When it runs

- On Pull Request events: `opened`, `synchronize`, and `reopened`

### Required permissions

This workflow uses minimal permissions:

- `pull-requests: read` (to read PR metadata and file lists)
- `contents: read` (commonly required for PR-context workflows)

### Step-by-step setup

1. **Create a workflow file** in your repository at:

   - `.github/workflows/changed-files.yml`

2. **Paste the workflow YAML** from the example below into that file.

3. **Commit and push** the changes to GitHub.

4. **Open or update a Pull Request**:

   - The workflow triggers automatically on `pull_request` events.
   - View the output under **Actions → (workflow run) → Get changed files**.

### Example workflow: `.github/workflows/changed-files.yml`

This workflow triggers on pull requests, uses `actions/github-script@v7` with `secrets.GITHUB_TOKEN`, calls `github.rest.pulls.listFiles`, paginates through results, prints each changed file path (one per line), and prints a total count.

```yaml
name: Get changed files

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  pull-requests: read
  contents: read

jobs:
  changed_files:
    name: Get changed files
    runs-on: ubuntu-latest

    steps:
      - name: List changed files in PR
        uses: actions/github-script@v7
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          script: |
            const { owner, repo } = context.repo;
            const pull_number = context.payload.pull_request?.number;

            if (!pull_number) {
              core.setFailed('This workflow must be triggered by a pull_request event.');
              return;
            }

            // Fetch changed files with pagination.
            const files = await github.paginate(
              github.rest.pulls.listFiles,
              {
                owner,
                repo,
                pull_number,
                per_page: 100,
              },
              (response) => response.data
            );

            const filenames = files.map((f) => f.filename);

            core.info('Changed files:');
            for (const name of filenames) {
              core.info(name);
            }

            core.info(`Total changed files: ${filenames.length}`);
```

### Notes

- `secrets.GITHUB_TOKEN` is provided automatically by GitHub Actions.
- The API method used is `github.rest.pulls.listFiles` and results are paginated automatically with `github.paginate`.
