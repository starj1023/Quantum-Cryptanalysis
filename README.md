# Quantum Cryptanalysis · Resource Estimator

Interactive estimator for quantum-attack resources against a range of
cryptographic primitives (symmetric, hash, asymmetric, post-quantum).

For each cipher variant it reports the logical cost (logical qubits,
T-gates, Clifford gates, T-depth) and turns it into physical-level
numbers (physical qubits, runtime) under fault-tolerant error correction.

**Draft — work in progress.**

## Live site

https://USERNAME.github.io/REPO-NAME/

## Run locally

Static page, no build step:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Files

- `index.html` — single-page app
- `data.js` — cipher variants and published cost estimates

## License

Eclipse Public License 2.0 — see [LICENSE](LICENSE).
