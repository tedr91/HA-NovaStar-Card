# Releasing Novastar H Series Card

## Standard release flow

1. Confirm working tree changes to release:
   - `git status --short`
2. Choose next version tag (`vX.Y.Z`).
3. Update `package.json` version to match (`X.Y.Z`).
4. Build with explicit card version marker:
   - PowerShell: `$env:CARD_VERSION='vX.Y.Z'; npm.cmd run build`
5. Verify output contains version marker in `novastar-h-series-card.js`.
6. Commit release artifacts:
   - `README.md` (if changed)
   - `src/novastar-h-series-card.ts` (if changed)
   - `novastar-h-series-card.js`
   - `package.json`
   - release docs (if changed)
7. Commit and tag:
   - `git commit -m "release: vX.Y.Z"`
   - `git tag -a vX.Y.Z -m "Release vX.Y.Z"`
8. Push branch and tag:
   - `git push origin HEAD`
   - `git push origin vX.Y.Z`
9. Publish GitHub release notes.

## Notes

- Use patch bumps for backward-compatible fixes (`v1.0.1` -> `v1.0.2`).
- Use minor bumps for additive features (`v1.0.x` -> `v1.1.0`).
- Keep release commits focused and small.
