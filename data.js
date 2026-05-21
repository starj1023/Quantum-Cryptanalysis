// Cipher data — generated 2026-05-13
window.CIPHER_DATA = {
  "ciphers": [
    {
      "id": "aes",
      "name": "AES",
      "color": "#06b6d4",
      "variants": [
        {
          "id": "aes-128",
          "name": "AES-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "3161",
            "clifford": "2^82",
            "tGates": "2^79.4",
            "tDepth": "2^70",
            "measurementGates": "2^77.1"
          },
          "physical": {
            "physicalQubits": "2^25",
            "runtime": "2^95"
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-analysis",
            "label": "Jang et al. 2025",
            "title": "Quantum Analysis of AES",
            "url": "https://doi.org/10.62056/ay11zo-3y"
          }
        },
        {
          "id": "aes-192",
          "name": "AES-192",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "7666",
            "clifford": "2^120.3",
            "tGates": "2^118.3",
            "tDepth": "2^112.3",
            "measurementGates": "2^110.5"
          },
          "physical": {
            "physicalQubits": "2^26",
            "runtime": "2^127"
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-analysis",
            "label": "Jang et al. 2025",
            "title": "Quantum Analysis of AES",
            "url": "https://doi.org/10.62056/ay11zo-3y"
          }
        },
        {
          "id": "aes-256",
          "name": "AES-256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "9889",
            "clifford": "2^152.3",
            "tGates": "2^150.3",
            "tDepth": "2^144.3",
            "measurementGates": "2^142.5"
          },
          "physical": {
            "physicalQubits": "2^27",
            "runtime": "2^159"
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-analysis",
            "label": "Jang et al. 2025",
            "title": "Quantum Analysis of AES",
            "url": "https://doi.org/10.62056/ay11zo-3y"
          }
        }
      ]
    },
    {
      "id": "aria",
      "name": "ARIA",
      "color": "#ef4444",
      "variants": [
        {
          "id": "v_fbex903",
          "name": "ARIA-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "9537",
            "clifford": "2^82.3",
            "tGates": "2^81.3",
            "tDepth": "1.47·2^72",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2024-improved-quantum",
            "label": "Oh et al. 2024",
            "title": "Improved Quantum Analysis of ARIA",
            "url": "https://eprint.iacr.org/2024/1986"
          }
        },
        {
          "id": "v_tjsrtku",
          "name": "ARIA-192",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "20865",
            "clifford": "2^114.5",
            "tGates": "2^113.5",
            "tDepth": "1.67·2^104",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2024-improved-quantum",
            "label": "Oh et al. 2024",
            "title": "Improved Quantum Analysis of ARIA",
            "url": "https://eprint.iacr.org/2024/1986"
          }
        },
        {
          "id": "v_p82ovr0",
          "name": "ARIA-256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "22657",
            "clifford": "2^146.7",
            "tGates": "2^145.7",
            "tDepth": "1.86·2^136",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2024-improved-quantum",
            "label": "Oh et al. 2024",
            "title": "Improved Quantum Analysis of ARIA",
            "url": "https://eprint.iacr.org/2024/1986"
          }
        }
      ]
    },
    {
      "id": "seed",
      "name": "SEED",
      "color": "#38bdf8",
      "variants": [
        {
          "id": "v_9f064k9",
          "name": "SEED-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "41497",
            "clifford": "2^84.2",
            "tGates": "2^82.8",
            "tDepth": "2^75",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2023-optimized-quantum",
            "label": "Oh et al. 2023",
            "title": "Optimized Quantum Implementation of SEED",
            "url": "https://eprint.iacr.org/2023/1566"
          }
        }
      ]
    },
    {
      "id": "hight",
      "name": "HIGHT",
      "color": "#fbbf24",
      "variants": [
        {
          "id": "v_d2n9q6o",
          "name": "HIGHT-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "297",
            "clifford": "2^80.8",
            "tGates": "2^80",
            "tDepth": "2^76.4",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-depth-optimized",
            "label": "Jang et al. 2024",
            "title": "Depth Optimized Quantum Circuits for HIGHT and LEA",
            "url": "https://eprint.iacr.org/2024/1221"
          }
        }
      ]
    },
    {
      "id": "lea",
      "name": "LEA",
      "color": "#7c3aed",
      "variants": [
        {
          "id": "v_6gkxjs9",
          "name": "LEA-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "2696",
            "clifford": "2^82.2",
            "tGates": "2^80.8",
            "tDepth": "2^77.2",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-depth-optimized",
            "label": "Jang et al. 2024",
            "title": "Depth Optimized Quantum Circuits for HIGHT and LEA",
            "url": "https://eprint.iacr.org/2024/1221"
          }
        },
        {
          "id": "v_4ugf3e9",
          "name": "LEA-192",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "3210",
            "clifford": "2^114.2",
            "tGates": "2^113.4",
            "tDepth": "2^109.4",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-depth-optimized",
            "label": "Jang et al. 2024",
            "title": "Depth Optimized Quantum Circuits for HIGHT and LEA",
            "url": "https://eprint.iacr.org/2024/1221"
          }
        },
        {
          "id": "v_c6egbmq",
          "name": "LEA-256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "3658",
            "clifford": "2^146.4",
            "tGates": "2^145.6",
            "tDepth": "2^141.6",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-depth-optimized",
            "label": "Jang et al. 2024",
            "title": "Depth Optimized Quantum Circuits for HIGHT and LEA",
            "url": "https://eprint.iacr.org/2024/1221"
          }
        }
      ]
    },
    {
      "id": "cham",
      "name": "CHAM",
      "color": "#06d6a0",
      "variants": [
        {
          "id": "v_c979rdh",
          "name": "CHAM-64/128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1485",
            "clifford": "2^77.4",
            "tGates": "2^78.6",
            "tDepth": "2^76.4",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-cham",
            "label": "Jang et al. 2025",
            "title": "Depth-Optimized Quantum Implementation of CHAM",
            "url": "https://eprint.iacr.org/2025/1188"
          }
        },
        {
          "id": "v_wf8jh9f",
          "name": "CHAM-128/128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "2853",
            "clifford": "2^78.5",
            "tGates": "2^79.7",
            "tDepth": "2^77.5",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-cham",
            "label": "Jang et al. 2025",
            "title": "Depth-Optimized Quantum Implementation of CHAM",
            "url": "https://eprint.iacr.org/2025/1188"
          }
        },
        {
          "id": "v_5vkchl2",
          "name": "CHAM-128/256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "3493",
            "clifford": "2^142.8",
            "tGates": "2^144",
            "tDepth": "2^141.8",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-cham",
            "label": "Jang et al. 2025",
            "title": "Depth-Optimized Quantum Implementation of CHAM",
            "url": "https://eprint.iacr.org/2025/1188"
          }
        }
      ]
    },
    {
      "id": "gift",
      "name": "GIFT",
      "color": "#f59e0b",
      "variants": [
        {
          "id": "gift-64",
          "name": "GIFT-64",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "385",
            "clifford": "2^77.8",
            "tGates": "2^75",
            "tDepth": "2^73.5",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-efficient-implementation",
            "label": "Jang et al. 2021",
            "title": "Efficient Implementation of PRESENT and GIFT on Quantum Computers",
            "url": "https://doi.org/10.3390/app11114776"
          }
        },
        {
          "id": "gift-128",
          "name": "GIFT-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "257",
            "clifford": "2^78.4",
            "tGates": "2^74.5",
            "tDepth": "2^74",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-efficient-implementation",
            "label": "Jang et al. 2021",
            "title": "Efficient Implementation of PRESENT and GIFT on Quantum Computers",
            "url": "https://doi.org/10.3390/app11114776"
          }
        }
      ]
    },
    {
      "id": "present",
      "name": "PRESENT",
      "color": "#f43f5e",
      "variants": [
        {
          "id": "present-80",
          "name": "PRESENT-80",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "289",
            "clifford": "2^56.1",
            "tGates": "2^55.5",
            "tDepth": "2^49.6",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-efficient-implementation",
            "label": "Jang et al. 2021",
            "title": "Efficient Implementation of PRESENT and GIFT on Quantum Computers",
            "url": "https://doi.org/10.3390/app11114776"
          }
        },
        {
          "id": "present-128",
          "name": "PRESENT-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "385",
            "clifford": "2^80.2",
            "tGates": "2^79.6",
            "tDepth": "2^73.6",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-efficient-implementation",
            "label": "Jang et al. 2021",
            "title": "Efficient Implementation of PRESENT and GIFT on Quantum Computers",
            "url": "https://doi.org/10.3390/app11114776"
          }
        }
      ]
    },
    {
      "id": "led",
      "name": "LED",
      "color": "#3b82f6",
      "variants": [
        {
          "id": "v_gh2a5di",
          "name": "LED-64",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1.01·2^7",
            "clifford": "2^47.3",
            "tGates": "2^46.5",
            "tDepth": "1.57·2^41",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "wang-2025-new-results",
            "label": "Wang et al. 2025",
            "title": "New Results in Quantum Analysis of LED",
            "url": "https://doi.org/10.1007/978-3-032-13301-4_15"
          }
        },
        {
          "id": "v_1whjmgk",
          "name": "LED-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1.00·2^8",
            "clifford": "2^79.9",
            "tGates": "2^79",
            "tDepth": "1.18·2^74",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "wang-2025-new-results",
            "label": "Wang et al. 2025",
            "title": "New Results in Quantum Analysis of LED",
            "url": "https://doi.org/10.1007/978-3-032-13301-4_15"
          }
        }
      ]
    },
    {
      "id": "default",
      "name": "DEFAULT",
      "color": "#10b981",
      "variants": [
        {
          "id": "default-128",
          "name": "DEFAULT-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "641",
            "clifford": "2^81.1",
            "tGates": "2^80.6",
            "tDepth": "2^74.8",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2023-quantum-implementation",
            "label": "Jang et al. 2023",
            "title": "Quantum Implementation and Analysis of DEFAULT",
            "url": "https://doi.org/10.1007/s12095-023-00666-y"
          }
        }
      ]
    },
    {
      "id": "pipo",
      "name": "PIPO",
      "color": "#a16207",
      "variants": [
        {
          "id": "v_d0bf9b3",
          "name": "PIPO-64/128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "385",
            "clifford": "2^80.4",
            "tGates": "2^79.7",
            "tDepth": "2^73.8",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-grover-pipo",
            "label": "Jang et al. 2021",
            "title": "Grover on PIPO",
            "url": "https://www.mdpi.com/2079-9292/10/10/1194"
          }
        },
        {
          "id": "v_a8418e5",
          "name": "PIPO-64/256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1281",
            "clifford": "2^148.7",
            "tGates": "2^148.5",
            "tDepth": "2^138.2",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2021-grover-pipo",
            "label": "Jang et al. 2021",
            "title": "Grover on PIPO",
            "url": "https://www.mdpi.com/2079-9292/10/10/1194"
          }
        }
      ]
    },
    {
      "id": "speck",
      "name": "SPECK",
      "color": "#d946ef",
      "variants": [
        {
          "id": "v_qa9lcj7",
          "name": "SPECK-32/64",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "98",
            "clifford": "2^46.6",
            "tGates": "2^45.7",
            "tDepth": "2^44",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_7bc9zgj",
          "name": "SPECK-48/96",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "146",
            "clifford": "2^63.3",
            "tGates": "2^62.4",
            "tDepth": "2^60.7",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_q24uvki",
          "name": "SPECK-64/128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "194",
            "clifford": "2^79.9",
            "tGates": "2^79.1",
            "tDepth": "2^77.3",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_prs74co",
          "name": "SPECK-128/128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "258",
            "clifford": "2^79.2",
            "tGates": "2^80.4",
            "tDepth": "2^78.6",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_21kxsaj",
          "name": "SPECK-128/192",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "322",
            "clifford": "2^111.2",
            "tGates": "2^112.4",
            "tDepth": "2^110.7",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_ylj74xg",
          "name": "SPECK-128/256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "386",
            "clifford": "2^143.3",
            "tGates": "2^144.5",
            "tDepth": "2^142.7",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        }
      ]
    },
    {
      "id": "lowmc",
      "name": "LowMC",
      "color": "#facc15",
      "variants": [
        {
          "id": "v_z4fdqz7",
          "name": "LowMC L1",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "3830",
            "clifford": "2^83.6",
            "tGates": "2^76.7",
            "tDepth": "2^71",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_v9x7ux8",
          "name": "LowMC L3",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "7650",
            "clifford": "2^117.3",
            "tGates": "2^109.3",
            "tDepth": "2^103.6",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        },
        {
          "id": "v_2xv4vza",
          "name": "LowMC L5",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "12178",
            "clifford": "2^150.5",
            "tGates": "2^141.6",
            "tDepth": "2^135.9",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2022-improved-quantum",
            "label": "Jang et al. 2022",
            "title": "Improved Quantum Analysis of SPECK and LowMC",
            "url": "https://doi.org/10.1007/978-3-031-22912-1_23"
          }
        }
      ]
    },
    {
      "id": "aim",
      "name": "AIM",
      "color": "#2dd4bf",
      "variants": [
        {
          "id": "v_xz07h43",
          "name": "AIM (I)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "25300",
            "clifford": "2^83.3",
            "tGates": "2^81.7",
            "tDepth": "2^69.8",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-quantum-implementation",
            "label": "Jang et al. 2024",
            "title": "Quantum Implementation of AIM",
            "url": "https://doi.org/10.3390/app14072824"
          }
        },
        {
          "id": "v_maxv6su",
          "name": "AIM (II)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "88396",
            "clifford": "2^116.9",
            "tGates": "2^115.5",
            "tDepth": "2^102.2",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-quantum-implementation",
            "label": "Jang et al. 2024",
            "title": "Quantum Implementation of AIM",
            "url": "https://doi.org/10.3390/app14072824"
          }
        },
        {
          "id": "v_57vunld",
          "name": "AIM (III)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "108073",
            "clifford": "2^149.3",
            "tGates": "2^147.7",
            "tDepth": "2^134.1",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2024-quantum-implementation",
            "label": "Jang et al. 2024",
            "title": "Quantum Implementation of AIM",
            "url": "https://doi.org/10.3390/app14072824"
          }
        }
      ]
    },
    {
      "id": "ascon-aead",
      "name": "ASCON-AEAD",
      "color": "#fb923c",
      "variants": [
        {
          "id": "v_ll5cg46",
          "name": "ASCON-AEAD (128a)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "21345",
            "clifford": "2^81.9",
            "tGates": "2^79",
            "tDepth": "2^68.7",
            "measurementGates": "2^77"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2025-quantum-security",
            "label": "Oh et al. 2025",
            "title": "Quantum Security Evaluation of ASCON",
            "url": "https://eprint.iacr.org/2025/260"
          }
        },
        {
          "id": "v_1x5fxqm",
          "name": "ASCON-AEAD (80pq)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "20065",
            "clifford": "2^97.8",
            "tGates": "2^94.9",
            "tDepth": "2^84.6",
            "measurementGates": "2^92.9"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2025-quantum-security",
            "label": "Oh et al. 2025",
            "title": "Quantum Security Evaluation of ASCON",
            "url": "https://eprint.iacr.org/2025/260"
          }
        }
      ]
    },
    {
      "id": "knot-aead",
      "name": "KNOT-AEAD",
      "color": "#b45309",
      "variants": [
        {
          "id": "v_ecefbf3",
          "name": "KNOT-AEAD (128, 256, 64)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "353",
            "clifford": "1.516·2^82",
            "tGates": "1.193·2^82",
            "tDepth": "1.346·2^81",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "baksi-2021-quantum-rectangle-knot",
            "label": "Baksi et al. 2021",
            "title": "Quantum implementation and resource estimates for Rectangle and Knot",
            "url": "https://link.springer.com/article/10.1007/s11128-021-03307-6"
          }
        },
        {
          "id": "v_6fb4e72",
          "name": "KNOT-AEAD (128, 384, 192)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "481",
            "clifford": "1.389·2^83",
            "tGates": "1.087·2^83",
            "tDepth": "1.234·2^82",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "baksi-2021-quantum-rectangle-knot",
            "label": "Baksi et al. 2021",
            "title": "Quantum implementation and resource estimates for Rectangle and Knot",
            "url": "https://link.springer.com/article/10.1007/s11128-021-03307-6"
          }
        },
        {
          "id": "v_d9f8bae",
          "name": "KNOT-AEAD (192, 384, 96)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "481",
            "clifford": "1.633·2^115",
            "tGates": "1.279·2^115",
            "tDepth": "1.450·2^114",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "baksi-2021-quantum-rectangle-knot",
            "label": "Baksi et al. 2021",
            "title": "Quantum implementation and resource estimates for Rectangle and Knot",
            "url": "https://link.springer.com/article/10.1007/s11128-021-03307-6"
          }
        },
        {
          "id": "v_415392d",
          "name": "KNOT-AEAD (256, 512, 128)",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "609",
            "clifford": "1.419·2^148",
            "tGates": "1.109·2^148",
            "tDepth": "1.260·2^147",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "baksi-2021-quantum-rectangle-knot",
            "label": "Baksi et al. 2021",
            "title": "Quantum implementation and resource estimates for Rectangle and Knot",
            "url": "https://link.springer.com/article/10.1007/s11128-021-03307-6"
          }
        }
      ]
    },
    {
      "id": "zuc",
      "name": "ZUC",
      "color": "#22c55e",
      "variants": [
        {
          "id": "v_zxe40xi",
          "name": "ZUC-128",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1201",
            "clifford": "2^83.5",
            "tGates": "2^82",
            "tDepth": "2^80.9",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "bhaumik-2025-can-quantum",
            "label": "Bhaumik et al. 2025",
            "title": "Can Quantum Break ZUC?",
            "url": "https://eprint.iacr.org/2025/1832"
          }
        },
        {
          "id": "v_c0mgerd",
          "name": "ZUC-256",
          "attack": "Grover + Exhaustive key search",
          "logical": {
            "qubits": "1201",
            "clifford": "2^147.6",
            "tGates": "2^146.2",
            "tDepth": "2^145.1",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "bhaumik-2025-can-quantum",
            "label": "Bhaumik et al. 2025",
            "title": "Can Quantum Break ZUC?",
            "url": "https://eprint.iacr.org/2025/1832"
          }
        }
      ]
    },
    {
      "id": "md5",
      "name": "MD5",
      "color": "#94a3b8",
      "variants": [
        {
          "id": "v_uuaxjs7",
          "name": "MD5-128",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "435",
            "clifford": "2^86.9",
            "tGates": "2^83.5",
            "tDepth": "2^78.7",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-improved-quantum",
            "label": "Jang et al. 2025",
            "title": "Improved Quantum Cryptanalysis of MD5 and SHA-1",
            "url": "https://ieeexplore.ieee.org/document/11474848/"
          }
        }
      ]
    },
    {
      "id": "sha1",
      "name": "SHA-1",
      "color": "#f97316",
      "variants": [
        {
          "id": "v_gjzaiaw",
          "name": "SHA-1-160",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "947",
            "clifford": "2^100.3",
            "tGates": "2^100.1",
            "tDepth": "2^95",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-improved-quantum",
            "label": "Jang et al. 2025",
            "title": "Improved Quantum Cryptanalysis of MD5 and SHA-1",
            "url": "https://ieeexplore.ieee.org/document/11474848/"
          }
        }
      ]
    },
    {
      "id": "sha2",
      "name": "SHA-2",
      "color": "#14b8a6",
      "variants": [
        {
          "id": "v_ax1z3nk",
          "name": "SHA2-256",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "5880",
            "clifford": "2^148.5",
            "tGates": "2^146",
            "tDepth": "2^138.4",
            "measurementGates": "2^143.9"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        },
        {
          "id": "v_7a6ad0c",
          "name": "SHA2-384",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "14127",
            "clifford": "2^213.9",
            "tGates": "2^211.5",
            "tDepth": "2^203",
            "measurementGates": "2^209.3"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        },
        {
          "id": "v_9ubgcya",
          "name": "SHA2-512",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "14255",
            "clifford": "2^277.9",
            "tGates": "2^275.5",
            "tDepth": "2^267",
            "measurementGates": "2^273.3"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        }
      ]
    },
    {
      "id": "sha3",
      "name": "SHA-3",
      "color": "#84cc16",
      "variants": [
        {
          "id": "v_3528vxh",
          "name": "SHA3-256",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "224001",
            "clifford": "2^148.4",
            "tGates": "2^145.5",
            "tDepth": "2^133.1",
            "measurementGates": "2^143.5"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        },
        {
          "id": "v_l76arnj",
          "name": "SHA3-384",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "224001",
            "clifford": "2^212.4",
            "tGates": "2^209.5",
            "tDepth": "2^197.1",
            "measurementGates": "2^207.5"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        },
        {
          "id": "v_s98crqw",
          "name": "SHA3-512",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "224001",
            "clifford": "2^276.4",
            "tGates": "2^273.5",
            "tDepth": "2^261.1",
            "measurementGates": "2^271.5"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-quantum-implementation",
            "label": "Jang et al. 2025",
            "title": "Quantum Implementation and Analysis of SHA-2 and SHA-3",
            "url": "https://doi.org/10.1109/TETC.2025.3546648"
          }
        }
      ]
    },
    {
      "id": "ascon-hash",
      "name": "ASCON-HASH",
      "color": "#a3e635",
      "variants": [
        {
          "id": "v_jbppbua",
          "name": "ASCON-HASH-256",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "62593",
            "clifford": "2^147.5",
            "tGates": "2^144.6",
            "tDepth": "2^134.2",
            "measurementGates": "2^142.6"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2025-quantum-security",
            "label": "Oh et al. 2025",
            "title": "Quantum Security Evaluation of ASCON",
            "url": "https://eprint.iacr.org/2025/260"
          }
        },
        {
          "id": "v_vp3pytx",
          "name": "ASCON-HASH-384 (XoF)",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "93569",
            "clifford": "2^212.1",
            "tGates": "2^209.1",
            "tDepth": "2^198.8",
            "measurementGates": "2^207.1"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2025-quantum-security",
            "label": "Oh et al. 2025",
            "title": "Quantum Security Evaluation of ASCON",
            "url": "https://eprint.iacr.org/2025/260"
          }
        },
        {
          "id": "v_fxp82lm",
          "name": "ASCON-HASH-512 (XoF)",
          "attack": "Grover + Preimage search",
          "logical": {
            "qubits": "124545",
            "clifford": "2^276.5",
            "tGates": "2^273.6",
            "tDepth": "2^263.2",
            "measurementGates": "2^271.6"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "oh-2025-quantum-security",
            "label": "Oh et al. 2025",
            "title": "Quantum Security Evaluation of ASCON",
            "url": "https://eprint.iacr.org/2025/260"
          }
        }
      ]
    },
    {
      "id": "ecc-qubit-opt",
      "name": "Prime ECC (Qubit opt)",
      "color": "#a855f7",
      "variants": [
        {
          "id": "p-256",
          "name": "ECC-192 (Prime, Q opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "5612",
            "clifford": "4182005448",
            "tGates": "1558010160",
            "tDepth": "4035132"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "5619",
            "tGates": "1020782664",
            "measurementGates": "199602524"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "p-384",
          "name": "ECC-224 (Prime, Q opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "6530",
            "clifford": "6300252987",
            "tGates": "2406344612",
            "tDepth": "5425776"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "6537",
            "tGates": "1545312100",
            "measurementGates": "294665500"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "p-521",
          "name": "ECC-256 (Prime, Q opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "7454",
            "clifford": "8761882831",
            "tGates": "3237379356",
            "tDepth": "7205639"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "7460",
            "tGates": "2273149572",
            "measurementGates": "514407568"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_4pzqr03",
          "name": "ECC-384 (Prime, Q opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "11133",
            "clifford": "28616946780",
            "tGates": "10437997680",
            "tDepth": "15645480"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "11140",
            "tGates": "7271598204",
            "measurementGates": "1425333156"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_6dd8nen",
          "name": "ECC-512 (Prime, Q opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "14877",
            "clifford": "73851892317",
            "tGates": "27422733384",
            "tDepth": "30027105"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "14885",
            "tGates": "18180989200",
            "measurementGates": "3624331450"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        }
      ]
    },
    {
      "id": "ecc-depth-opt",
      "name": "Prime ECC (Depth opt)",
      "color": "#818cf8",
      "variants": [
        {
          "id": "v_zbjvrg0",
          "name": "ECC-192 (Prime, D opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "87283",
            "clifford": "1796362928",
            "tGates": "453905184",
            "tDepth": "340041",
            "measurementGates": "110230179"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "83827",
            "tGates": "338698654",
            "measurementGates": "82077716"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_sd0ktfc",
          "name": "ECC-224 (Prime, D opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "103902",
            "clifford": "2630174583",
            "tGates": "674546900",
            "tDepth": "465468",
            "measurementGates": "182877579"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "95838",
            "tGates": "498049308",
            "measurementGates": "120707575"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_q9mzcio",
          "name": "ECC-256 (Prime, D opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "129050",
            "clifford": "3824492325",
            "tGates": "269596845",
            "tDepth": "577344",
            "measurementGates": "269596845"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "119834",
            "tGates": "724547880",
            "measurementGates": "177630225"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_1oycvoa",
          "name": "ECC-384 (Prime, D opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "232024",
            "clifford": "11997475874",
            "tGates": "3101136920",
            "tDepth": "1013156",
            "measurementGates": "792108472"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "225112",
            "tGates": "2204540112",
            "measurementGates": "540413743"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        },
        {
          "id": "v_h4004ho",
          "name": "ECC-512 (Prime, D opt)",
          "attack": "Shor",
          "logical": {
            "qubits": "367827",
            "clifford": "26911797147",
            "tGates": "7026663958",
            "tDepth": "1587862",
            "measurementGates": "1772322949"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "qldpcInputs": {
            "qubits": "340179",
            "tGates": "4784880372",
            "measurementGates": "1101353449"
          },
          "ref": {
            "id": "kim-2026-new-quantum",
            "label": "Kim et al. 2026",
            "title": "New Quantum Circuits for ECDLP",
            "url": "https://eprint.iacr.org/2026/106"
          }
        }
      ]
    },
    {
      "id": "binary-ecc",
      "name": "Binary ECC",
      "color": "#ec4899",
      "variants": [
        {
          "id": "b-283",
          "name": "ECC-127 (Binary)",
          "attack": "Shor",
          "logical": {
            "qubits": "31227",
            "clifford": "2^26.6",
            "tGates": "2^24.3",
            "tDepth": "2^12.5",
            "measurementGates": "26624"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-new-quantum",
            "label": "Jang et al. 2025",
            "title": "New Quantum Cryptanalysis of Binary Elliptic Curves",
            "url": "https://doi.org/10.46586/tches.v2025.i2.781-804"
          }
        },
        {
          "id": "v_33zpu0n",
          "name": "ECC-163 (Binary)",
          "attack": "Shor",
          "logical": {
            "qubits": "53461",
            "clifford": "2^27.6",
            "tGates": "2^25.3",
            "tDepth": "2^12.4",
            "measurementGates": "61440"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-new-quantum",
            "label": "Jang et al. 2025",
            "title": "New Quantum Cryptanalysis of Binary Elliptic Curves",
            "url": "https://doi.org/10.46586/tches.v2025.i2.781-804"
          }
        },
        {
          "id": "v_14nqv2c",
          "name": "ECC-233 (Binary)",
          "attack": "Shor",
          "logical": {
            "qubits": "83366",
            "clifford": "2^28.8",
            "tGates": "2^26.3",
            "tDepth": "2^13",
            "measurementGates": "163840"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-new-quantum",
            "label": "Jang et al. 2025",
            "title": "New Quantum Cryptanalysis of Binary Elliptic Curves",
            "url": "https://doi.org/10.46586/tches.v2025.i2.781-804"
          }
        },
        {
          "id": "v_ybw0nag",
          "name": "ECC-283 (Binary)",
          "attack": "Shor",
          "logical": {
            "qubits": "145239",
            "clifford": "2^29.7",
            "tGates": "2^27.3",
            "tDepth": "2^13.2",
            "measurementGates": "360448"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-new-quantum",
            "label": "Jang et al. 2025",
            "title": "New Quantum Cryptanalysis of Binary Elliptic Curves",
            "url": "https://doi.org/10.46586/tches.v2025.i2.781-804"
          }
        },
        {
          "id": "v_9tgid42",
          "name": "ECC-571 (Binary)",
          "attack": "Shor",
          "logical": {
            "qubits": "501593",
            "clifford": "2^32.5",
            "tGates": "2^30",
            "tDepth": "2^14.3",
            "measurementGates": "1343488"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "jang-2025-new-quantum",
            "label": "Jang et al. 2025",
            "title": "New Quantum Cryptanalysis of Binary Elliptic Curves",
            "url": "https://doi.org/10.46586/tches.v2025.i2.781-804"
          }
        }
      ]
    },
    {
      "id": "classic-mceliece",
      "name": "Classic McEliece",
      "color": "#fde047",
      "variants": [
        {
          "id": "v_ysn95g4",
          "name": "Classic McEliece-1",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^22",
            "clifford": "2^105",
            "tGates": "2^104",
            "tDepth": "2^96",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_72l2q48",
          "name": "Classic McEliece-3",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^23",
            "clifford": "2^128",
            "tGates": "2^127",
            "tDepth": "2^117",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_ibyhos4",
          "name": "Classic McEliece-5",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^24",
            "clifford": "2^167",
            "tGates": "2^166",
            "tDepth": "2^156",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "hqc",
      "name": "HQC",
      "color": "#fda4af",
      "variants": [
        {
          "id": "v_ywn8a15",
          "name": "HQC-1",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^30",
            "clifford": "2^105",
            "tGates": "2^104",
            "tDepth": "2^89",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_v7hxrx3",
          "name": "HQC-3",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^32",
            "clifford": "2^142",
            "tGates": "2^141",
            "tDepth": "2^125",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_1tyij7e",
          "name": "HQC-5",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^34",
            "clifford": "2^174",
            "tGates": "2^173",
            "tDepth": "2^156",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "bike",
      "name": "BIKE",
      "color": "#67e8f9",
      "variants": [
        {
          "id": "v_jr9iev6",
          "name": "BIKE-1",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^29",
            "clifford": "2^106",
            "tGates": "2^105",
            "tDepth": "2^90",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_tuiiyxs",
          "name": "BIKE-3",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^31",
            "clifford": "2^141",
            "tGates": "2^140",
            "tDepth": "2^124",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        },
        {
          "id": "v_su23ef7",
          "name": "BIKE-5",
          "attack": "Grover + ISD",
          "logical": {
            "qubits": "2^33",
            "clifford": "2^175",
            "tGates": "2^174",
            "tDepth": "2^157",
            "measurementGates": "0"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "seo-2025-analysis-quantum",
            "label": "Jang & Seo 2025",
            "title": "Analysis of Quantum Attack Cost for Code-Based Cryptography",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "kyber",
      "name": "Kyber",
      "color": "#0ea5e9",
      "variants": [
        {
          "id": "v_ivy7e1w",
          "name": "Kyber512",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "3421",
            "clifford": "2^179.52",
            "tGates": "2^178.05",
            "tDepth": "2^172.90",
            "measurementGates": "2^175.26"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_q2od8sn",
          "name": "Kyber768",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "4905",
            "clifford": "2^255.99",
            "tGates": "2^254.52",
            "tDepth": "2^249.39",
            "measurementGates": "2^251.73"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_gw6bcl8",
          "name": "Kyber1024",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "6608",
            "clifford": "2^343.30",
            "tGates": "2^341.83",
            "tDepth": "2^336.70",
            "measurementGates": "2^339.04"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "dilithium",
      "name": "Dilithium",
      "color": "#6366f1",
      "variants": [
        {
          "id": "v_xrfdex7",
          "name": "Dilithium2",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "5257",
            "clifford": "2^187.70",
            "tGates": "2^186.23",
            "tDepth": "2^180.09",
            "measurementGates": "2^183.44"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_yvf9d92",
          "name": "Dilithium3",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "6794",
            "clifford": "2^257.60",
            "tGates": "2^256.13",
            "tDepth": "2^249.99",
            "measurementGates": "2^253.34"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_oayxe2g",
          "name": "Dilithium5",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "8659",
            "clifford": "2^340.61",
            "tGates": "2^339.14",
            "tDepth": "2^333.00",
            "measurementGates": "2^336.35"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "smaug-t",
      "name": "SMAUG-T",
      "color": "#c084fc",
      "variants": [
        {
          "id": "v_vpjmlmr",
          "name": "SMAUG-T-128",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "3591",
            "clifford": "2^192.49",
            "tGates": "2^191.02",
            "tDepth": "2^185.95",
            "measurementGates": "2^188.23"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_sjubm6f",
          "name": "SMAUG-T-192",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "5113",
            "clifford": "2^270.26",
            "tGates": "2^268.79",
            "tDepth": "2^263.72",
            "measurementGates": "2^266.00"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_vlmrn8w",
          "name": "SMAUG-T-256",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "7383",
            "clifford": "2^387.90",
            "tGates": "2^386.43",
            "tDepth": "2^381.35",
            "measurementGates": "2^383.64"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        }
      ]
    },
    {
      "id": "haetae",
      "name": "HAETAE",
      "color": "#f472b6",
      "variants": [
        {
          "id": "v_ljke16g",
          "name": "HAETAE-120",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "4211",
            "clifford": "2^200.44",
            "tGates": "2^198.97",
            "tDepth": "2^193.43",
            "measurementGates": "2^196.18"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_h00x50j",
          "name": "HAETAE-180",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "6937",
            "clifford": "2^340.61",
            "tGates": "2^339.14",
            "tDepth": "2^333.60",
            "measurementGates": "2^336.35"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        },
        {
          "id": "v_wq7pn0l",
          "name": "HAETAE-260",
          "attack": "Grover + NV sieve (SVP problem)",
          "logical": {
            "qubits": "8192",
            "clifford": "2^405.37",
            "tGates": "2^403.90",
            "tDepth": "2^398.36",
            "measurementGates": "2^401.11"
          },
          "physical": {
            "physicalQubits": "",
            "runtime": ""
          },
          "notes": "",
          "ref": {
            "id": "kim-2025-concrete-quantum",
            "label": "Kim et al. 2025",
            "title": "Concrete Quantum Sieve for Shortest Vector Problem",
            "url": ""
          }
        }
      ]
    }
  ]
};
