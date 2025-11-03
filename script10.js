function productDetails() {
  let products = [
    {
      id: 1,
      name: "Gold Necklace with Earrings",
      price: "₹1,999",
      rating: "⭐⭐⭐⭐☆ (150 Reviews)",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIvOwDdSBEVaJYls_6ZHRlFno4KHsFpUkcWrGJWV4y9KWkEP8fXAB2USPwyeeSIJ_m6pY0TzggCB33uzZyFCBJaomuGuIu1h-T70XH4yUj4NNsp8UsKGGr1w",
      description: "Elegant gold necklace paired with matching earrings, perfect for weddings and parties.",
      details: [
        "Material: Pure gold plated",
        "Set: Necklace + Earrings",
        "Occasion: Wedding, Party wear",
        "Weight: Lightweight and comfortable"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeUUEV0m5-HxcuozwAY9XIhdeixjUMiTL4jza5UZ4265SWZXdXmWfE1rXIl45KWo3vkvbw-MKrv9WNkgxLKKkFTGRwNZ7uwvWq5jeTCFETplqR0OVbYbGpVg",
          name: "Pearl Necklace Set",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐ (95 Reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3COnVhBBIL5Erj-Zpy3QKLnjXff5YV2_chq1TGRij0Zad8cvXNvxukCX07GuX-ajsZ0ooUVNeZcD534piWNj-g4nAqBrRJYQb6SrrelgI",
          name: "Kundan Bridal Necklace",
          price: "₹3,499",
          rating: "⭐⭐⭐⭐⭐ (180 Reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRd6WcBmtsslqwTu_LnWqhPxIrpXP6yln-XqmfrbN1qregych6slg4H93vW5Zx6ZibYd7B2mLUfXXV42Hkp56fGqmLRB0NuZhhSv2mjkZw",
          name: "Rose Gold Pendant",
          price: "₹999",
          rating: "⭐⭐⭐⭐ (70 Reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeHFdFbWpBVHTmDeDKC1nFix71a1Xksk7l0PckWNTCbN7Z-u7FX93Yk4BOznXzvMYTU8LnDbtq5J8TlLMxTymhbAlY7_hfNFvEiEI_QDSo8SmZF-VYSUXMMQ",
          name: "Diamond Choker Necklace",
          price: "₹5,999",
          rating: "⭐⭐⭐⭐⭐ (210 Reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1g_ZnBXrFduD5JS5InF86ZE3z13te4viedsumS0IgV_J2aBpPHJbni6liT9rNJLw21pd84SGTC_foKQbiKDIg8aEcw-0yzBztxf_v1Efo",
          name: "Antique Gold Necklace",
          price: "₹2,499",
          rating: "⭐⭐⭐⭐ (130 Reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRU5T5gX-bGhjy-STaPQqlywvhlWVUVEfuxEV7eGdU77tSQG4GFQs5_FXgz-p79GXh_Vwda8Bqiyck9KOLIgsHvZy9Gv2ecifsLBrDkPS1QMcAUIhAizK1c",
          name: "Stone Studded Necklace",
          price: "₹1,799",
          rating: "⭐⭐⭐⭐☆ (150 Reviews)"
        },

        {
          id: "rp1-7",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCs79CEnk_EFqZnj4oVkhqPByEHkaauBMkpw8XHu7fFIDOXhxtxUA9RhirRpgpQo5lU-p4-I_H7cZmEU49XlJ754qhY-Ts3ToVEG4WeM4",
          name: "Emerald Stud Earrings",
          price: "₹899",
          rating: "⭐⭐⭐⭐ (60 Reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMwRiU-BL_smiDoZzE_9ZDsZ8UZ_3IDaYCGHlLrYjxCV0cTrrpSYs117XQSzNI_yUYIS_G-c6tlTt6dGByC7YpFqYOPF3pgrSPqg0quxNiBiSKiIV2p69VHbw",
          name: "Gold Bangle Set",
          price: "₹2,299",
          rating: "⭐⭐⭐⭐⭐ (140 Reviews)"
        }
      ]

    },
    {

      id: 2,
      name: "Party Wear Lehenga",
      price: "₹5,499",
      rating: "⭐⭐⭐⭐⭐ (200 Reviews)",
      image: "https://i.pinimg.com/1200x/8d/bc/e4/8dbce4ec24fd66a5c465543390251f1d.jpg",
      description: "Beautiful party wear lehenga designed to make you shine at festive occasions.",
      details: [

        "Fabric: Net with Embroidery",
        "Blouse: Semi-stitched",
        "Dupatta: Included",
        "Occasion: Wedding / Party"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDHq7QMSV71wq5WQ5NxvUUUxajPE0gpjSNYVzc-krnlJflZ3brTmXgLFTeQ1tf5QTAXWB9zaVsTPLqoAu0dBiBeShReZy9lTdvZCeM2CM",
          name: "Red Bridal Lehenga",
          price: "₹8,499",
          rating: "⭐⭐⭐⭐⭐ (250 Reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHed0u0g_TwDP8DnE8tSOUVyaktXBsr4s9RhjtZrw_jxx0wolvCV-9j7NAZyhtrinr6f9YhxKlFbr88p8jXY5putEMGkPahUcaD7GK08M",
          name: "Golden Party Lehenga",
          price: "₹7,999",
          rating: "⭐⭐⭐⭐ (180 Reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSVa7DHbvOnla0fm3MkZ-BMT0wWSAEdDyhJSOhpIvvyX1IAWDBoi-SGJasd8qDGXyht_WWff2L3Cy7HiACL4EZdBL0VvejkIq2QybsFDzPU",
          name: "Designer Silk Lehenga",
          price: "₹9,499",
          rating: "⭐⭐⭐⭐⭐ (200 Reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPNPs6YlQhZrTtdZYM6eCEqxvGG_bAB79cQHH4sxT2Elg2Lkq25cZ6A6o52dtJ0ymTc-7X7t80xZI-O1J5MEMQIpzcx0ESnann7W3iJWzasNG7EFvAzqhJ",
          name: "Embroidered Lehenga Set",
          price: "₹6,999",
          rating: "⭐⭐⭐⭐ (160 Reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVYjxB3J0eOJ0zGvhfkHUQYh8ypLX7QXhtUUrsUCPAdan8x-eagPoz-5SGp189ibp8s87F6DAxjtnNfEWXT3DtUFSRj75_uT-cHOm24w7o81LXJkDrCjfD",
          name: "Floral Print Lehenga",
          price: "₹5,499",
          rating: "⭐⭐⭐⭐ (140 Reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyP98F1UanaBd7NxkNFMl9C7yUywLHqHzKbXR362LOViAxuGx99KZlOcsWILwRmNZMMHDNl5RHLTSkccnWJtToiwb25VWsKQVkyVnCLFlUPYnwGNxm3jKC6g",
          name: "Net Lehenga with Dupatta",
          price: "₹6,299",
          rating: "⭐⭐⭐⭐⭐ (170 Reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6pYxFwdBNgPpCwjbusxyTXOza4zqlcNiO66pOrJ1Z5Gc9hdZIhPU9qNka03YBaU-Ziz0LPIYgUmt37Mn00G8QPmv8K2q01k5uQcUIzlN12jZ2jmFUgmXbQQ",
          name: "Heavy Bridal Lehenga",
          price: "₹10,999",
          rating: "⭐⭐⭐⭐⭐ (300 Reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQD2lTxb7vye9kaTqU6WtBAo65ZlziVx-tB-ns9G3KG4x8sXSfy_9U_oraNiBOEHq6sAf-foWbwUsDQ1FDCT8PkHq-OveBrhFhxdph0vZU",
          name: "Party Wear Lehenga",
          price: "₹7,199",
          rating: "⭐⭐⭐⭐ (190 Reviews)"
        }
      ]

    },
    {
      id: 3,
      name: "Simple Purse",
      price: "₹799",
      rating: "⭐⭐⭐⭐ (90 Reviews)",
      image: "https://i.pinimg.com/1200x/70/f7/cb/70f7cbedcd22bf2cb60a54c59b791831.jpg",
      description: "Chic and simple purse, perfect for daily use or casual outings.",
      details: [
        "Material: Faux Leather",
        "Compartments: 2 Main, 1 Zip",
        "Strap: Adjustable",
        "Style: Everyday casual"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGHhelgq90pEDieVAB4cKiszc6_bA7nAIyZ4IUWSXTNiBRtY4fWumMDhv2ZGwixYxLPxBE8YtAnsMAKqRS2l94UIs5nh7xwpzYpIXCPnocjg5w4Tg_iSOpTwY",
          name: "Leather Wallet",
          price: "₹799",
          rating: "⭐⭐⭐⭐ (85 Reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuqbrCO9yeB_NZpOZzTac9IgEV0oP2GIerHOZAZTk6cWBFImO57gp38rRhA-vmyGp15qZKb2XsQY6bLbybLuVzm5Wp1WgndhRbOn-UFOSa",
          name: "Clutch Bag",
          price: "₹1,299",
          rating: "⭐⭐⭐⭐⭐ (110 Reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6Pr8B4owmflwjii05uDoPojeyfHTV6MJp53GwoouWF0qztReM6v6PdzXUNxvNt1oBqiwB2kQ1lU2tpoKLmk8mvdWp4nykPDwZVnPU20HwKwqVzO7U6qOH",
          name: "Tote Bag",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐ (95 Reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJnZFHNHKxL1b7uj-aA9-XBEXN6jz5ujlSivPKiFE85LAM_bByOemhgU0LzOvm-1DPTZlgSkqQhMQwstdqauRxfNZ2pGAhxQK6rpF39eyoymPGt5n26lyR",
          name: "Crossbody Bag",
          price: "₹1,199",
          rating: "⭐⭐⭐⭐⭐ (120 Reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzY1OSD7rOr37GI2q6J0SyWuk4tgoO6jtaO3bZG2gRj-dRbolZ5FVFW7F1yvMkWSfguknFVGkdZjE5gn3GyGGshRt1XlHv78HhsUifsVERH3Vr2GGuY3snIA7c",
          name: "Evening Purse",
          price: "₹999",
          rating: "⭐⭐⭐⭐ (70 Reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRklqCfOw3V6xiAh_KNO48wWQyum0Jlp0_0oHxO2NZGuzT269yE9l7XQLJJIsJdmCBpGfOKzsMzP19tBEwPLVTQ1JuzBF1-FnGZXkMAnX_OT_vU0OWNyqMzDA",
          name: "Mini Shoulder Bag",
          price: "₹899",
          rating: "⭐⭐⭐⭐ (60 Reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWkePX5gLLMyVUuzP8eOrRJpX3GQ4QY6MINMXyRXzv2jTNZMbaqrhDODyick0Q_Lyz5e8Aqlj8l-4RfIY-N8Jp8PN9FtvbAwhXz2UJhS4xhHPZ9ZLQtR6AAa4",
          name: "Designer Purse",
          price: "₹1,699",
          rating: "⭐⭐⭐⭐⭐ (130 Reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOzxgm95-AgeX07KADTqirwwpxPyfe-hzG4R2Mix_uWij05QYef5bMxqcys0ibRfVkxJvf3F0NoGe2tTMpiDs9qszUVHxYafvEvp7KSMC4PUMxVzOmpU-AxA",
          name: "Casual Sling Bag",
          price: "₹749",
          rating: "⭐⭐⭐⭐ (80 Reviews)"
        }
      ]
    },
    {
      id: 4,
      name: "Silk Saree",
      price: "₹3,499",
      rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_6UJ0X58R9RCRMcC4Q2t13GzvfOV_vkgQIsOSH9FXiI9vZhTnqA3eXE8zo3EsmrhPUcZhsdlKXELXcUThmlLnDtvU2wrIUxm-7BiPb-vH",
      description: "Elegant silk saree perfect for weddings and festive occasions.",
      details: [
        "Fabric: Pure Silk",
        "Blouse: Unstitched",
        "Length: 6.2m (with blouse piece)",
        "Occasion: Traditional, Wedding"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          name: "Banarasi Silk Saree",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT2DMEu9N57qBgya4f0aDQVN3K83txEuIBGM-TSgUswvfrDzT36Lb8ioTOjGP5I6ZfK7UxdjDO4ISDwXjRjP8dYX-muIdmxe1SPDu9fYiGPmr-G7gslLaos",
          price: "₹2,499",
          rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
        },
        {
          id: "rp1-2",
          name: "Kanjeevaram Saree",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpUQQ4eibpnZSkRBSHkALNCYYO7_yzSKzPvYXXBrQU_j4kum8Jnr1PvpzRVzEFvpnupr3uu0BsKly4ia20N7oSyk1Q2YlPgjTFrExPm7H87RUtWEnjEZuc",
          price: "₹3,999",
          rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
        },
        {
          id: "rp1-3",
          name: "Chiffon Saree",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqdqDdvsRfMN1JTF1K-qdzUkScqH7G0rIn1KTLyjRPTU38ZhAbwZg6WxE8zGjZOvV-x-BWAB8N69kWGZUMCi8gAvxKzM4-QtmTOSdAg7e31fPsnzoLmYnD",
          price: "₹1,799",
          rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
        },
        {
          id: "rp1-4",
          name: "Georgette Saree",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSsGfgRUHB1iwRcJLp_phSb28ckPhT3vkH0KqbJlecV4gZ9JTUqDHOo44KU3VAcbqgSqGn8TRewdCydheWnGKEIqDxTKT4YHChgLDqO241EGFxGqwQLqIiZ1Q",
          price: "₹1,299",
          rating: "⭐⭐⭐(120 Reviews)",
        },
        {
          id: "rp1-5",
          name: "Cotton Saree",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIzNPnVgvk3ngzCwr42WOAHee505sC2aRKt_2zKS3vA7LbxjFSGpM5WKS76iNZdryy_nmyqAl31lu6hbSnAKPQqD6EsaeLqxH1J6gke_16osvabRJQ_JJQ",
          price: "₹1,599",
          rating: "⭐⭐⭐⭐⭐ (140 Reviews)",
        },
        {
          id: "rp1-6",
          name: "Net Saree",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZto6Txb7zYJkR6E7qHGeS6gQO-xaSC6DS4Xconi7yPUlSt3iSWU4JbIWzOmEbN1R0oVr70UOMkK-OD8pDfzt9VQVQURa08j8iIszl6XmtyMMvPhsGaXWm",
          price: "₹3,499",
          rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
        },
        {
          id: "rp1-7",
          name: "Designer Saree",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuf1bvfjcgpco_gKHyDomAi74P5mgP7i4_3YShV-4_Fe11ERTikuwXCecVe5v9XtXAq0R9IMMIjxQDpFmU7bWYAovt2Kf8LuEVHBSSayoaMqh7uKIGxpji4g",
          price: "₹999",
          rating: "⭐⭐⭐ (120 Reviews)",
        },
        {
          id: "rp1-8",
          name: "Linen Saree",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThjDfcbBqvNDADWD38xmHDWmPnAu2EH0Aqw9iaSjXe3fv7BMVT4YDdPae3MBWmYec1mFlVFkbwDUf6nrBRLrpPRP3mzLlKUmo7fLX2SkiRAsORBJLSYMBGvA",
          price: "₹2,199",
          rating: "⭐⭐⭐⭐(99 Reviews)",
        }
      ]
    },
    {
      id: 5,
      name: "Black Shirt for Boys",
      price: "₹1,299",
      rating: "⭐⭐⭐⭐☆ (80 Reviews)",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy8Rt9xS3nrYngT-_r5lK7wyfwXGXy1cN1kEfDZ5Sn8VGAc7JKZVfF7KuVvx55fAM77hJqm6hUgFyFXPVqmO5Uim-mVsJl",
      description: "Stylish black shirt for boys, ideal for casual and semi-formal events.",
      details: [
        "Material: Cotton Blend",
        "Fit: Regular",
        "Sleeves: Full Sleeves",
        "Ideal For: Boys / Men"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTrwVCVCxBErGg_K64h9Id6E8nGUcYdOK3pGp-I7FoIFYPRkJiTKGsFYW2HT6q-YHUsL-pvLH2rAmRYeM0Yj8eDWDp08ug9lRLLqHLJVeFReaGcHSEfQEUm",
          name: "Casual Cotton Shirt",
          price: "₹799",
          rating: "⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbGqU9fwB4lWEHFVE7zzWqJH7XNj9fm0Ub_apO6QfTV_PnYaUzwWV7OEwognxYbQ6a4eDDbILpUiomaZgzvpAAaEoa4Sh8WqiX3QtSsxIFc6kFHoMdMaWtEqeo",
          name: "Slim Fit Formal Shirt",
          price: "₹999",
          rating: "⭐⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPyTd0zMktmvhPTPtH2O_umGscN0SXTZPMf4gOXcRDAf2lbAPw7deE9PhwS7xy2bwYwug4vItkjWLRuo3vuyfaVwUjr2fi_cmbBvoWPsX7fGAcDYLlIchdCQ",
          name: "Denim Check Shirt",
          price: "₹1,199",
          rating: "⭐⭐⭐⭐ (180 reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTR2rLrEXo4bBeFrPs7ebrNikQZx-Z_h3vMb7twNhgWGj44tIl_LE6_p5KAe3yT3dDlENoBXLBso9DVmp6v1omAS2S_cT9pWY4-MYo4e33kVcLEXe-IdAnAYg",
          name: "Linen Summer Shirt",
          price: "₹899",
          rating: "⭐⭐⭐⭐⭐ (50 reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8o24aD_Vir8r1jdLapB5iw_kfs_H7KlI7O-SzBXJym0Vwd2rX7llKjVpZcW4oqVTKnkSEy4MABfXMzvQ6vOoinK9sb7PxZI_56sIL4UWj0uYW4aT_WF0Ub4g",
          name: "Oxford Long Sleeve Shirt",
          price: "₹699",
          rating: "⭐⭐⭐⭐ (170 reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQSj3WPQGU1P6Bk1u_BXTrUFg-_H8ZgujPkp2Re_PC7sG4LZSQHuFHXMtX_T6Iislxk2s9GT6VCMluVHd1Sa6Taqu_crCBoIQ0fpUDzPz7h7oT7WbiuIasJA",
          name: "Casual Striped Shirt",
          price: "₹1,299",
          rating: "⭐⭐⭐⭐ (65 reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqGRQAvgrlu4b19grvuk1NAowHR66z_B5kKIwxVDDK8lkhZ2gYaNh8CAY_C0yPtQdGD6Sp8GMz1JyzXDCn0QcnKjjv_yZVZfRyGFpXqbpdL5ahmvSLb1MT7Q",
          name: "Graphic Print Shirt",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSzXM72I5LlgdD1uaDsvNEpc23pmZv3PObUqBhL7M-x7TQVp0O9VPU87bnDtC6JFh1FGZhWIIsmBYkaFix4J2W2P9oD3JCUmyZOAyVYmrlOZm5xGraMa0X",
          name: "Button-Down Dress Shirt",
          price: "₹1,099",
          rating: "⭐⭐⭐⭐⭐ (110 reviews)"
        }
      ]
    },
    {
      id: 6,
      name: "Golden High Heels",
      price: "₹2,999",
      rating: "⭐⭐⭐⭐⭐ (140 Reviews)",
      image: "https://i.pinimg.com/736x/54/01/62/540162b61a55d5369e1618b08222008b.jpg",
      description: "Party wear high heels in gold color with sparkling stones, perfect for special occasions.",
      details: [
        "Color: Gold",
        "Heel Height: 4.5 inches",
        "Material: Synthetic with Stone Work",
        "Occasion: Party, Wedding"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQZsI-RcgYK_pxsbR-qWwNkqq8gqEYaaqqieSudYLHyclgddOSXJKXiW0X5YSEF37jgjK3B-V5IlkhBPbSgcnpnJMWE0ZQ8NzXI71CcjSAKWacZ_VZ_f_Rd5w",
          name: "Classic Stiletto Heels",
          price: "₹1,099",
          rating: "⭐⭐⭐⭐⭐ (150 reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRLGaeV13hKwQZfM0CtRl_QiwPZX1sL5C_MB0Z5EBL4AIP47GVWN3ynTdIklrTlSpeohuRvNjaXyBzh0cAlN4KysSIV9lPrgw",
          name: "Block Heel Sandals",
          price: "₹2,199",
          rating: "⭐⭐⭐⭐ (80 reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSc_IfMhU-u1atonFNfk0BgXmdpF3AdeEf8pctw59-OxHVInwE0F-Bxb4cwh5kcXpYyr-PGe7ob4JPDqE3tMQXE2twMCrrqyauNoMuqHUc0z1iEsn2kxyq8UA",
          name: "Strappy High Heels",
          price: "₹999",
          rating: "⭐⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTg0EvZmshfxE8mNsweeK_q_j2TpBklvzjNT1nOGEIRgGyYT-qc7qM5FwMvXLSRRmSmkEywfExbQ7OY0bejpn4ylH4QZXhc0SaItDomS36I5ZDigNj9Uui4cA",
          name: "Peep Toe Pumps",
          price: "₹1,199",
          rating: "⭐⭐⭐⭐ (95 reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSjz24xXObZyVtCj-JUlWt-n6alzwcCUYw0IIRB3XRSIQ4wdJwSprEwBws3Q4BkOFybe4u9l1VoRAetQ2vlWDDpsH22sD9YSQxVKJaE0zZT65JETrq7J1mu1w",
          name: "Ankle Strap Heels",
          price: "₹899",
          rating: "⭐⭐⭐⭐⭐ (110 reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkd5b5FMbiWPnfIxZXukZvIKpMk_XlnMX_pxL_6dGNGGxk0CfGJ8OMYBJnIE-AgQBjvSZHLe8-ovf3yb-tt-jgOmq8VxfYL0H1yPC_5Vn3U3yuHhT_n_zMWw",
          name: "Kitten Heels",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐ (60 reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQq_YUylWKiM4vQB493EyTkfFj2LNdlOq12ZdVbLeMdPNN-G5c9pOI5F-baIyrNJUGB7iQ7x4RTXS_vfdhbjrmHkYnS9gkezDgr6scfPSjlBs7mh-KL1lbWEQ",
          name: "Platform Heels",
          price: "₹1,699",
          rating: "⭐⭐⭐⭐⭐ (140 reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwEvrRcetD_8Zv0-v4-9-MsrBjYr9skMIHdjbsykq3jNwcWDrpHnjpp5JbmdhnYaJN215p5BUDzfuDUkmff8hf-XFdlXKIorIo-fLUI_BlKIei5Y3IACssWA",
          name: "Open Toe Mules",
          price: "₹1,999",
          rating: "⭐⭐⭐⭐ (85 reviews)"
        }
      ]
    },
    {
      id: 7,
      name: "Black Smart Watch",
      price: "₹4,499",
      rating: "⭐⭐⭐⭐⭐ (180 Reviews)",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60",
      description: "Black smart watch with calling feature, ideal for everyday use and tech-savvy users.",
      details: [
        "Color: Black",
        "Features: Calling, Fitness Tracking, Notifications",
        "Battery: Up to 7 Days",
        "Warranty: 1 Year"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT_BteQisGgsAp738gAg_Z19manvAFIZMBJBtOAcKv96Oze58I8u62XYpDdUsh7VUeXdbUgzdX0vZoeYK7D9EVJ0_PbH4UB8pMA3_Ojf4jnyt-MCNZbfJk6_w",
          name: "Classic Analog Watch",
          price: "₹2,499",
          rating: "⭐⭐⭐⭐⭐ (200 reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTykBYVVn6iA5ZXRpCxk0g1IoNL6lLCKGl3hQrs29m22xDvWO2I83GJWpplM2LzAdTRTeOITIiFNH9qj1vwCdIKACniW4uaBq9PZqwArjNcDV2r19aeUUhz",
          name: "Sporty Digital Watch",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐ (150 reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSv97KhkvyOeGsM-8jAusRQVOcYp5hvss1b1fX-_A60os2gBfcjrdo1TUriOllFiOwQuM8QEMob0q5xWhUYSybACg83iJ20EQhQycxMt57ofOSoburcHPf85A",
          name: "Leather Strap Watch",
          price: "₹3,499",
          rating: "⭐⭐⭐⭐⭐ (180 reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmrvZachb1uzXbpaVWU3gEyA77aarqSoR099UkHiiR9BlmoSWGWWgskVtnilpGMh7HG-NwwutLNh8mJf23a4ywTfIPGPD--ungiQeC3tKUHfsawanwsE-c",
          name: "Metallic Chronograph Watch",
          price: "₹1,999",
          rating: "⭐⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTeAgoW_JMhDWfphi2h5dLFVTD_6seVkdVzvvfhZ12qCa7qqbsq2LJd46SHX8eLERyPsnTrpjmgq0JndLV3MI4BtEdTE8ayh__yI_m4HMh15p6re7wRrX8",
          name: "Minimalist Analog Watch",
          price: "₹2,999",
          rating: "⭐⭐⭐⭐ (90 reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRkVlGvxCaJX4yX_jdNSGloDAJCqiRS7o6QVAmlde9o8wL_9bji6Oe-CnLmUzaNzPP3UNkAsua9z2K2L8ahacoMt1pvBCfijQtApCIW4xy1LoNvG26ElAYV",
          name: "Smart Fitness Watch",
          price: "₹2,999",
          rating: "⭐⭐⭐⭐⭐ (160 reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9-EYzt8CDjpEvl4fqYXen-yhiMOmzAKcvPYUIraT2vxUhoe4hq_k7SK578JcQtedjU8-ekhpJQnn38MRyzYDxpTP5hmdMa0-dgkMUB99qf7XmLANHWz64nA",
          name: "Luxury Gold Watch",
          price: "₹2,799",
          rating: "⭐⭐⭐⭐⭐ (80 reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMUEtXYgPy_8cGBHbziXLSGBlLi_d_qXrE9wpYyVE56mngL-88yztYk-4ed5DTkasIjSxyZP66DAdYfDAMTKfdCrdnB7CR0xJMbNIr9PpZdtjDSNNG6zw2JA",
          name: "Casual Canvas Strap Watch",
          price: "₹999",
          rating: "⭐⭐⭐⭐ (110 reviews)"
        }
      ],
    },
    {
      id: 8,
      name: "Zara Velvet Shadow Edp",
      price: "₹1,550",
      rating: "⭐⭐⭐⭐ (110 Reviews)",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7Pab1i1rWSBqTyr-m4OvS_xbqXFmOzVjmpmT2YmUUNjAMxrFJlKVObO72k0LkSh2AXc8rcfbK0u9z5kIBfsnVL9FsyGL-3HHwriY9FHP8AxaylpC89h6z1yw",
      description: "Refreshing perfume, perfect for gifting or personal use.",
      details: [
        "Fragrance: Long-lasting",
        "Quantity: 100ml",
        "Type: Eau de Parfum",
        "Suitable For: Men & Women"
      ],
      relatedProducts: [
        {
          id: "rp1-1",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRSCzyQux20ji6_jgNQOhWm031LhXp-fzzD3Ze5fw5upJlp_sbRbDRMAsgQX2DzJSAtmnJ5Fpkk4LwoUHGieYKgfRgOAwTbfcqA7oEJbVHr0rypc9VBu3wq",
          name: "Floral Essence Perfume",
          price: "₹1,550",
          rating: "⭐⭐⭐⭐ (175 reviews)"
        },
        {
          id: "rp1-2",
          image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUJbrIzq3MfKhOaa0Cz7f7Ipc6ew0C7O_GZWke1Bm7QLfw9dAySi7ClOFDpMEfKDKS-4DprZE1lQA_Mi92HKQnLZjzOhUTCLNG_sHlelPRYYmLBU92l4wB",
          name: "Citrus Fresh Perfume",
          price: "₹999",
          rating: "⭐⭐⭐⭐⭐ (120 reviews)"
        },
        {
          id: "rp1-3",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyzwC4ChnRoOCnshhddmddBvT-y4q3TyKUpmo9GZ5xCWlHfhfqrHBDTJkhfVdxMSAcuhG0De7vnbc9ow1vBL06UTwNDk1G6SH05yj-yR4hov7MCaGVqVDUkB4",
          name: "Woody Musk Perfume",
          price: "₹1,499",
          rating: "⭐⭐⭐⭐⭐ (190 reviews)"
        },
        {
          id: "rp1-4",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQYVu-mQrekbVb8hGdOErdWvJ0LXGae8qYBJH0LhEAs65v6yAI60bL3Uo4oVerii1ksiDlGpQzFvXXvjl-wiG4YMJJycu3DZAgdiKHzCAeP-XXYETPxUaGCA",
          name: "Vanilla Dream Perfume",
          price: "₹1,399",
          rating: "⭐⭐⭐⭐ (160 reviews)"
        },
        {
          id: "rp1-5",
          image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVZxYaTVcQlCX5JINAYuHTpz3vjgbBc2gYZJ1giT1giM0G5siAIRE6pyXX0dhPeioNpLKlw4bL8cjdL_i-sEZywNlyYn2O1yAfrGPADpur4K86Y_5Ws7NSKQ",
          name: "Ocean Breeze Perfume",
          price: "₹1,999",
          rating: "⭐⭐⭐⭐ (180 reviews)"
        },
        {
          id: "rp1-6",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXBWvaRZFsNYQI6GuCU1P-j10MNgHO3hGgvCScyNvapK80WEm40X11MCLwGzBFHRyrIMNv3TzhYKllYYYTRgT8wkjS-adW6v96n1MSrhzTMBVnXFi4g9nivw",
          name: "Rose Blossom Perfume",
          price: "₹1,999",
          rating: "⭐⭐⭐⭐⭐ (100 reviews)"
        },
        {
          id: "rp1-7",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4636-hpfYmZpwrv_MPYdK_wj4dh2X4NDcvFUUUjLzD-vHsXI_xA7v4piw5uW__3y8a2Mc2gi8FsxHznuVN3m4qt6O6kdTDjbrx2AwpvDAhD3WNksTUHTJ",
          name: "Exotic Spice Perfume",
          price: "₹1,599",
          rating: "⭐⭐⭐⭐⭐ (170 reviews)"
        },
        {
          id: "rp1-8",
          image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9ciaeKtemottRO_lEUU-qcnM74R9NU00VQu_sUj1_ChN2gDsYGpzmnciOUWXoZ3T1EfcvE-fd2c3KlDMnntnhehLINbVI6xPB319vFTsg0sesyUYeLWLm",
          name: "Fresh Linen Perfume",
          price: "₹1,799",
          rating: "⭐⭐⭐⭐ (165 reviews)"
        }
      ]
    }
  ];


  let urlParams = new URLSearchParams(window.location.search);
  let productid = parseInt(urlParams.get("id"));

  let product;
  products.forEach(function (arr) {
    if (arr.id === productid) {
      product = arr;
    }
  })
  if (product) {
    document.querySelector(".product-img img").src = product.image;
    document.querySelector(".name").textContent = product.name;
    document.querySelector(".price").textContent = product.price;
    document.querySelector(".rating").textContent = product.rating;
    document.querySelector(".description").textContent = product.description;

    document.addEventListener("DOMContentLoaded", function () {
      const params = new URLSearchParams(window.location.search);
      const productId = Number(params.get("id"));

      const buyBtn = document.getElementById("buy-now-btn");
      buyBtn.addEventListener("click", function () {
        window.location.href = `payment.html?id=${productId}`;
      });
    });


    let extraInfo = document.querySelectorAll("#details li");
    product.details.forEach(function (e, index) {
      if (extraInfo[index]) {
        extraInfo[index].textContent = e;
      }
    })



    let relatedBox = document.querySelector(".related-list");
    relatedBox.innerHTML = "";


    product.relatedProducts.forEach(function (r) {
      let card = document.createElement("div");
      card.className = "card";

      let image = document.createElement("img");
      image.src = r.image;

      let h2 = document.createElement("h2");
      h2.textContent = r.name;

      let p = document.createElement("p")
      p.textContent = r.price;

      let rating = document.createElement("span")
      rating.textContent = r.rating;

      let btn = document.createElement("button");
      btn.textContent = "Add to Cart";
      btn.className = "product-btn";
      

      card.appendChild(image);
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(rating);
      card.appendChild(btn);
      relatedBox.appendChild(card);
    })
  } else {
    document.querySelector(".container").innerHTML = "<h2>product Not Found</h2>";

  }

}

productDetails();














