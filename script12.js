
document.addEventListener("DOMContentLoaded", function () {
  let urlParams = new URLSearchParams(window.location.search);
  let productid = parseInt(urlParams.get("id"));


  let products = [
    {
      id: 1,
      name: "Gold Necklace with Earrings",
      price: "₹1,999",
      rating: "⭐⭐⭐⭐☆ (150 Reviews)",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRIvOwDdSBEVaJYls_6ZHRlFno4KHsFpUkcWrGJWV4y9KWkEP8fXAB2USPwyeeSIJ_m6pY0TzggCB33uzZyFCBJaomuGuIu1h-T70XH4yUj4NNsp8UsKGGr1w",
    },
    {
      id: 2,
      name: "Party Wear Lehenga",
      price: "₹5,499",
      rating: "⭐⭐⭐⭐⭐ (200 Reviews)",
      image: "https://i.pinimg.com/1200x/8d/bc/e4/8dbce4ec24fd66a5c465543390251f1d.jpg",
    },
    {
      id: 3,
      name: "Simple Purse",
      price: "₹799",
      rating: "⭐⭐⭐⭐ (90 Reviews)",
      image: "https://i.pinimg.com/1200x/70/f7/cb/70f7cbedcd22bf2cb60a54c59b791831.jpg",
    },
    {
      id: 4,
      name: "Silk Saree",
      price: "₹3,499",
      rating: "⭐⭐⭐⭐⭐ (120 Reviews)",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_6UJ0X58R9RCRMcC4Q2t13GzvfOV_vkgQIsOSH9FXiI9vZhTnqA3eXE8zo3EsmrhPUcZhsdlKXELXcUThmlLnDtvU2wrIUxm-7BiPb-vH",

    },
    {
      id: 5,
      name: "Black Shirt for Boys",
      price: "₹1,299",
      rating: "⭐⭐⭐⭐☆ (80 Reviews)",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQy8Rt9xS3nrYngT-_r5lK7wyfwXGXy1cN1kEfDZ5Sn8VGAc7JKZVfF7KuVvx55fAM77hJqm6hUgFyFXPVqmO5Uim-mVsJl",
    },

    {
      id: 6,
      name: "Golden High Heels",
      price: "₹2,999",
      rating: "⭐⭐⭐⭐⭐ (140 Reviews)",
      image: "https://i.pinimg.com/736x/54/01/62/540162b61a55d5369e1618b08222008b.jpg",
    },

    {
      id: 7,
      name: "Black Smart Watch",
      price: "₹4,499",
      rating: "⭐⭐⭐⭐⭐ (180 Reviews)",
      image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdhdGNofGVufDB8fDB8fHww",

    },
    {
      id: 8,
      name: "Zara Velvet Shadow Edp",
      price: "₹1,550",
      rating: "⭐⭐⭐⭐ (110 Reviews)",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7Pab1i1rWSBqTyr-m4OvS_xbqXFmOzVjmpmT2YmUUNjAMxrFJlKVObO72k0LkSh2AXc8rcfbK0u9z5kIBfsnVL9FsyGL-3HHwriY9FHP8AxaylpC89h6z1yw",

    }
  ];

  let shopProducts = [
    { id: 101, name: "Pink Kurta Suit Set", price: "₹2100", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3JXMXSV3pCmrbT0iRJCI1xaxvVFV5980j1Cko4hTEpQjczyyHaKToZXu0h6UEBXBysc9hirMlZsQzQTahucf-qI3eZ6j1fuD7JlG8qEc", rating: "⭐⭐⭐⭐" },
    { id: 102, name: "Red Heavy Georgette Bandhani Printed Lehenga Set", price: "₹7000", image: "https://i.pinimg.com/1200x/5e/4a/ea/5e4aea3ba5e00bcc846e8127d4415d95.jpg", rating: "⭐⭐⭐" },
    { id: 103, name: "Heavy Flair Lehenga Choli For Wedding", price: "₹4000", image: "https://anayadesignerstudio.com/cdn/shop/files/Wedding_Lehenga_Choli.webp?v=1751109773&width=1100", rating: 5 },
    { id: 104, name: "Sharara Set", price: "₹2000", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTk97guPjY4LcALE2vPoh5r3i_CEWMwdWTXPb91U_XOiReMrbdmZttnCX9nBgoqTJUJQJTF9IykRZGxnfyDuJ3whxY-SCO5h0_Iy9uC7w9k", rating: "⭐⭐⭐⭐⭐" },
    { id: 105, name: "Stripe Jacket Set", price: "₹4000", image: "https://i.pinimg.com/1200x/af/2a/3c/af2a3c108892363a12c1066058a047b5.jpg", rating: "⭐⭐⭐⭐" },
    { id: 106, name: "Printed Lehenga", price: "₹6000", image: "https://i.pinimg.com/736x/12/96/d1/1296d1824afe1cbd88c1923001d01d7b.jpg", rating: "⭐⭐⭐" },
    { id: 107, name: "Pink Organza, Tulle Sequins, Embroidery Scoop Neck Lehenga Set", price: "₹2300", image: "https://i.pinimg.com/1200x/e7/0d/a0/e70da02f2695afbb7a37d0fb8d47be93.jpg", rating: "⭐⭐⭐⭐" },
    { id: 108, name: "Blue Linear Embroidered Lehenga with Blouse and Dupatta ", price: "₹2500", image: "https://i.pinimg.com/1200x/b3/ae/88/b3ae881dbfa870737f30292835e3313b.jpg", rating: "⭐⭐⭐⭐⭐" },
    { id: 109, name: "Maroon Satin, Organza, Mulberry Hand Anarkali With Dupatta", price: "₹2000", image: "https://i.pinimg.com/736x/a8/63/ab/a863ab3e7cedf9a7b1a45e01b6877ff0.jpg", rating: "⭐⭐⭐⭐" },
    { id: 110, name: "Lehenga Choli With Dupatta Set", price: "₹3000", image: "https://i.pinimg.com/736x/df/d2/cc/dfd2ccc5f84eb91e0d4d95f7a79557fc.jpg", rating: "⭐⭐⭐" },
    { id: 111, name: "Bridal Lehenga Set", price: "₹6000", image: "https://i.pinimg.com/736x/3e/f9/4c/3ef94c99a140bcf74992686d54fc0ddf.jpg", rating: "⭐⭐⭐⭐" },
    { id: 112, name: "Anarkali Suit Set", price: "₹4000", image: "https://i.pinimg.com/1200x/cd/c7/52/cdc752101c04b381f3a721811e872355.jpg", rating: "⭐⭐⭐" },
    { id: 113, name: "Wine Georgette Thread Sequence Salwar Suit", price: "₹2000", image: "https://i.pinimg.com/1200x/f5/56/8f/f5568f1247e6b9be2290c53958f67c1d.jpg", rating: "⭐⭐⭐⭐" },
    { id: 114, name: "Anarkali Gown", price: "₹1200", image: "https://i.pinimg.com/1200x/73/ad/20/73ad207da228ae5292bf0a985060fb90.jpg", rating: "⭐⭐⭐" },
    { id: 115, name: "Anarkali Kurta set", price: "₹2000", image: "https://i.pinimg.com/736x/63/58/c4/6358c4ff561ab92eb56acbb915ab678f.jpg", rating: "⭐⭐⭐⭐" },
    { id: 116, name: " Red Lehenga Choli", price: "₹2400", image: "https://i.pinimg.com/1200x/97/60/b6/9760b63fdecb132b8c91a879fd8b64a4.jpg", rating: "⭐⭐⭐⭐" },
    { id: 117, name: "Silk Lehenga Choli", price: "₹4000", image: "https://i.pinimg.com/1200x/1c/d6/13/1cd61375bfb5ffb682e4e6df86d3fa79.jpg", rating: "⭐⭐⭐" },
    { id: 118, name: "Lehenga Set", price: "₹3000", image: "https://i.pinimg.com/736x/6f/c8/bd/6fc8bd14ca17d704afc457a91fb79618.jpg", rating: "⭐⭐⭐⭐" },
    { id: 119, name: "anarkali gowan", price: "₹1,346", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQS2V3atSh-nLrAaF5N3Tq3j6jfspYqlQLaHfvrBEyJfz79qoMMLM6gbFm1cPksA28dDNtLmXXp13Wz2hiWgQwB2TOWdpa3tpgBvzUbjNywPguLhJgerAYfQ", rating: "⭐⭐⭐⭐" },
    { id: 120, name: " Classic Anarkali Suit with Golden Embroidery", price: "₹2,499", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSKFbKPyRvzMvNwIksgmsRBmCuqaAx0_bWYQqpi3AotfTZ3kG96Hnu0imu2X7BsekgOeP4jnW0KT91eLyx71Oat82bUzjDEnV6ZeUomWgDz", rating: "⭐⭐⭐⭐" },
    { id: 121, name: "Anarkali gown", price: "₹2000", image: "https://i.pinimg.com/1200x/04/e2/18/04e21839488f243b2f9e6543df804a53.jpg", rating: "⭐⭐⭐⭐" },
    { id: 122, name: "Anarkali Gown", price: "₹2,699", image: "https://i.pinimg.com/736x/4b/48/d9/4b48d9c712e9222884a45d823d72595f.jpg", rating: "⭐⭐⭐⭐" },
    { id: 123, name: "Anarkali Suit Set", price: "₹3000", image: "https://i.pinimg.com/1200x/13/b1/f1/13b1f14b287ee5b0861f32bdb0c964f2.jpg", rating: "⭐⭐⭐⭐" },
    { id: 124, name: "Gown Suit", price: "₹3000", image: "https://i.pinimg.com/1200x/5f/fc/ae/5ffcae7ab6a05e6e3a8c7e0e988c03d2.jpg", rating: "⭐⭐⭐⭐" },
    { id: 125, name: "Suits Plazo", price: "₹4000", image: "https://i.pinimg.com/1200x/2b/ec/12/2bec124d451efffec0b2c1f198aaca33.jpg", rating: "⭐⭐⭐" },
    { id: 126, name: "Lehenga Choli Set", price: "₹5000", image: "https://i.pinimg.com/736x/6f/de/d9/6fded9a4259bdb457e3cd0175920fce7.jpg", rating: "⭐⭐⭐⭐" },
    { id: 127, name: "Anarkali Suit", price: "₹2000", image: "https://i.pinimg.com/736x/36/c5/2a/36c52a0c0cb89a8084a0404370f558d9.jpg", rating: "⭐⭐⭐" },
    { id: 128, name: "Co-ord Set", price: "₹3000", image: "https://i.pinimg.com/736x/d2/7a/86/d27a86a46d4b84e0094f3d8564697ad6.jpg", rating: "⭐⭐⭐⭐" },
    { id: 129, name: "Noorani Suit Set", price: "₹2000", image: "https://i.pinimg.com/1200x/63/47/2f/63472ff72e486a5fd4d04aaf6fec05d4.jpg", rating: "⭐⭐⭐" },
    { id: 130, name: "Sharara Dupatta Set", price: "₹3000", image: "https://i.pinimg.com/736x/77/69/b2/7769b250e08b4de3b5a0b049d1c35446.jpg", rating: "⭐⭐⭐⭐" },
    { id: 131, name: "Lehnga Choli", price: "₹2000", image: "https://i.pinimg.com/736x/99/3a/86/993a86015de006a705f9fe4ffb943de7.jpg", rating: "⭐⭐⭐⭐" },
    { id: 132, name: "Kurta Sharara Set", price: "₹3000", image: "https://i.pinimg.com/736x/43/a9/52/43a952fa1ecfef2de257217a56b8dddd.jpg", rating: "⭐⭐⭐⭐" },
    { id: 133, name: "Kurta Skirt Set", price: "₹5000", image: "https://i.pinimg.com/736x/c7/0e/4b/c70e4b9d37de508ab1adba200f9acef1.jpg", rating: "⭐⭐⭐" },
    { id: 134, name: "Sharara Set", price: "₹5000", image: "https://i.pinimg.com/736x/4f/e5/c6/4fe5c6321467239fa6b3583875138648.jpg", rating: "⭐⭐⭐⭐" },
    { id: 135, name: "Sharara Set", price: "₹2000", image: "https://i.pinimg.com/736x/87/f3/29/87f329babdd59ef39177b34c7477bf7d.jpg", rating: "⭐⭐⭐⭐" },
    { id: 136, name: "Mustard Chikankari Salwar Kameez ", price: "₹2,999", image: "https://i.pinimg.com/736x/b0/04/2b/b0042b2e719fc49f51c4072b745dacef.jpg", rating: "⭐⭐⭐" },
    { id: 137, name: "Gul Gharara Set", price: "₹2000", image: "https://i.pinimg.com/736x/db/ef/5a/dbef5ae394b12daef648340165fced1d.jpg", rating: "⭐⭐⭐⭐" },
    { id: 138, name: "Sharara Set", price: "₹3000", image: "https://i.pinimg.com/736x/e0/6b/4c/e06b4cd2c2bb8dc4b601ede7280d0ab2.jpg", rating: "⭐⭐⭐⭐" },
    { id: 139, name: "Sharvee Leher Sharara Set", price: "₹4,800", image: "https://i.pinimg.com/1200x/c7/e7/48/c7e748c86e1c007b77fc5e6d8102bdc4.jpg", rating: "⭐⭐⭐⭐" },
    { id: 140, name: "Flared Kurta Set", price: "₹1,260", image: "https://i.pinimg.com/1200x/ea/ff/71/eaff71bf9304aaed41112731ef8bc428.jpg", rating: "⭐⭐⭐⭐" }

  ];

  let makeupproducts = [
    { id: 141, name: "Matte Lipstick", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT5K2AHb2j0z4p-71bazIPFWxRixgxhuBUuD2rbIuKzGifuvlrPHuQkrY5QwjDJNNfVwNVRMFVmB_8Tj0UJGH43TWZjdNbTFOPbT-m3gpYrzh-W5mDSJkHYUg" },
    { id: 142, name: "Glossy Lipstick", price: "₹549", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRijEiT1OApvOXEtBTkmieSeQ2bprsu7jIwyzMwambEuXVabCWzdxuRSDY3z-AH2kk8uh3okwavdbmxHJvJUHg-moZiaAOpgnwJJqRf5zjd28Nz2ngYVydl", category: "makeup" },
    { id: 143, name: "Liquid Lipstick", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9ZUJUBkcZlotvXbQgQdwkP21FEVDO_xazD253iY_ayKs7GDhseca_RBo020dH4dsPWvQmeV8dCpojXuqvqszQARzW02xAsmaqSZdZMcsHwVMnGTK_-5QP", category: "makeup" },
    { id: 144, name: "Foundation Stick", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZTPMRqMV5aM060jGRtHiLPTtsb8pcgQFPT2b83rf7IgdcP35RQVyS9yZ5cYj3ovNH1MvG22lyyjOtK3HaAuXPF0QQNo1s89aHWMMizlHyXaDoJSX7retV", category: "makeup" },
    { id: 145, name: "Liquid Foundation", price: "₹1099", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT-bWuyGumW-Ft8gA4sPqrIQ1Te2_ywt-52eNblt4Dm8LJMZs5tpnf4bfazq2IrtD2OL8omiWN11pqL5gVcEhesXQlc6SbSBphWDhxU9JsokMBUNk1Mt5CQ", category: "makeup" },
    { id: 146, name: "Powder...", price: "₹799", rating: "⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTAjCXEdOwQn0y_YhS24FE5ujZvOLJysRCkKRPb2vCgB-9kUYVB5RC54H7zEQ9P7EnNqXzvBg497O9a6LNXyRdMO3zB1MgljJ5x-jAnWVJvTxrumlpSGSx8w", category: "makeup" },
    { id: 147, name: "BB Cream", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQNCcCObrmW92Jc4T7b9Ql9ARrI4S3Dlu3iAwmQGQ36k3TRxPe_BJ_bYiYxW62Ii4KrqGa4DLgmYsOhzeZ_F7FhUWVYLHXG-l371AksO9HKox6lxc2Fx06QBA", category: "makeup" },
    { id: 148, name: "CC Cream", price: "₹749", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0lSzDr_aAloLsQqjiMsrGMqs1ZxVwVy3dAmkwy494-o1fHpq7sxVPfrdW0HX6Jv17ZtBVCu5paGzVtdKPJawYdWz7UZpy7cWx0QJUwtbxu2FiEz18vWnl", category: "makeup" },
    { id: 149, name: "Compact Powder", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQStndgfmU0fBi7OUUEdOdEFm5l1nPj3bQpa8kjfR-6Tp7HdAOwsdtyM3vpsKp9nbUtazdxarju2pr7EpQG6ySEJjCSCioGGVam2HJZowypuCHmxfSPrV8G", category: "makeup" },
    { id: 150, name: "Loose Powder", price: "₹699", rating: "⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTT1Zf9T2uUbstOMitRWVAINfM8yIqP2a0VQio0_reS0HaQJKssoFRYbsJlBjH3LtzOm-ZcA-sJfI2nT_s_XC9TriWOObLsO0GfsPby5EpYNS5K3Z6fM2SnrA", category: "makeup" },

    { id: 151, name: "Liquid Eyeliner", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQq0XpHhjwf6ag_Qn4LbwYSxcstxQhE6YOqNDoRNiT3l-8fimf8EOdZBUsrXCJTrk-CMOgXRGd9_lmAFW3W4SJ2fNAqB94QqSt-d75hdgExs6JHx18MIQnu2Q", category: "makeup" },
    { id: 152, name: "Gel Eyeliner", price: "₹399", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTD2uK8ualcEIz0CHuy7b9nSqcHp9dSFRzjUVF2F9u72_4ts4PwQnTU0sxMocCfM-k-CW_fDVLd0o02vpM3H9ShybHLLsfPuWzXEC-f55Ks2Jo1Ohon0-gnrA", category: "makeup" },
    { id: 153, name: "Pencil Eyeliner", price: "₹199", rating: "⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNiJ0FmQ-gD9rRDiz_yjx8TaKDusEPsTFtH-v3nFyvrPbm2pif2w5iyccXpyRases5POVLn-Ul1u1O-vSb1ghBAoezb8HdhHrcxXsEdMhFy_Sguos9xVqX", category: "makeup" },
    { id: 154, name: "Mascara Volume", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuf-dq7HfwnaOhon8WQbh34GCFByT_UrJoUk-zEGmyNfc7wLQcYXUd0lHi5i5KYi4GdFSteesaZG6VrOX4YgPdtuoOWBua1yJ4wuDaMzmBoha1z1EhshH8", category: "makeup" },
    { id: 155, name: "Mascara...", price: "₹549", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfB2wNZNSHEBoOYvR5fZNISYUHtrCy1u0ICYd1HujbIcZ3xfDSMv9sAL8YXEOqvz7MsLr3O6m238mZ1094EuXpSBS33gGa-MDlC7GJ2v82VYx9jQ4Ta5z3ww", category: "makeup" },
    { id: 156, name: "Eyeshadow Nude...", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ6djdP8RtMgTMsFAftv2wet01kWJgRGKVYfOP1IW6jg1ZOO_bsvGFlHITtVoPyMu41P6pP32-0dsJ2P8rkDURXgIwiIXj1V70zBhlJeMMQ4iPujiL9Vdi", category: "makeup" },
    { id: 157, name: "Eyeshadow Glitter...", price: "₹1199", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmfFWd78YFmtUKV4JLRSQK3JNnUCfzLBat2MdTwWgijH5OvWVSC3_pTY6aPk5L7OgmpUNeFuOBaXM4DdvaOYWc-YXGhiPDLa4BcV-tbrtNITBTzE-3f4pQ-w4", category: "makeup" },
    { id: 158, name: "Highlighter Stick", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhZF6OC61EJM0wbew2CvvA_jeqBO_BBTYOmNbYXpL6TRar4FnbECf1Hn8Rswp1t8gG4ibaB_Q_mU9a17iODdrJQaTBR4nNzC_ATYPUkMq2za0UDf1L8Xed", category: "makeup" },
    { id: 159, name: "Powder Highlighter", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5f3hu5J0ArL1W_gY74HtVAMpQlnTA-zFeNUVr-D2trNPRIxkLpWgoUchnvhde5a7Ky46o3ui8GoPHOO-cnmy42wDNrBLrAk4K4Kqx-_63Snq8iI3Kb8EV", category: "makeup" },
    { id: 160, name: "Blush Pink", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRn6O5fhHBV_eTlR7nFQi817zDbqSUFrU1w7BLNyPbF2z-0Wv51KXtEUmLYKw1tRyFfp25_wozQVGMotlIr-YIh0tNq-ASao_NnP4fbiJ1xFvagGd6xFzrZB0s", category: "makeup" },

    { id: 161, name: "Blush Coral", price: "₹549", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ_YBmdiwEiTlXoX-JYCXpCEaFAgmvnaMRdqvD6Zi-7ji9KqR9sWU9b0LoCUkYNOr-HeDBjkW5ZIVKgBgVKY_22jLLDcOjDscRLMcLpBCAW_G0uDa3vQRI7Ng", category: "makeup" },
    { id: 162, name: "Contour Stick", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3r7fEkXK_m-_KGoXSiJl_dGKRVqHIZ3YHYA010c3lU7D31JUjoJ_2AYvDBiQA3aZ18B6Dhgg5I2QvmuxEKofxJxCMD8Z6t7-tbCzucK8aBo96G0EzBRzE", category: "makeup" },
    { id: 163, name: "Contour Powder", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0NchMXR9V-KkUW8erA66HMQIT4KB-I65SIMLR-oBhBG4euXHtJIjUs0Mg38Y4THcX6W__Yq7fI3j4GieX6vcKtmSdRs0GMnZcc3W3B5PA9E_t9oAArs01qQ", category: "makeup" },
    { id: 164, name: "Makeup Primer", price: "₹999", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnhrXyM8MmqNVNu3xs37MtbtLkzGz07eFPgpgPCkmTKZBBPsU_yX_TvNEAZ1OvNH4kcJULmMBdws2Ok6W6DBmhfYeaRd7fhVbNS5aXarDNlLZjv-HIUDqRqQ", category: "makeup" },
    { id: 165, name: "Setting Spray", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTelvQ-hc3W86TJ6hweDVTA8MRw8rs9eCcKgAGN2jnNs6xEipeUrKuEatF2x5hhfLBalcriVqHjIDdLI7IStxSnwWN9EH6nr9i4DU8UNejmj5SkGWaarw8xQg", category: "makeup" },
    { id: 166, name: "Concealer Liquid", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTEwM3JF5mehS3t3Q7rtAyV_hnyVk2CUwRsltodtrYUZvq3Amnm08taLY3XakLr-Yp-JvMumO6AU0wd5sIK6sCy30lcOF9IQbLfJMa467YSq2sEzEKwxO-", category: "makeup" },
    { id: 167, name: "Concealer Stick", price: "₹799", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrC-hQVWvlPsnSEqqkoOb53LaIhGiYhevVMQqIS2Vg93NKIzl02R0hxLoUCTSsXLKb3EJ9DYrPGR0O-18jMlmKW_5rwd9LCgRmAq6aa3mM42mRSp4zSfbc3g", category: "makeup" },
    { id: 168, name: "Lip Balm", price: "₹199", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROYzflc_pGmF_7xiCNKv3mQuulnAfPWJ7GNJCPZmi-A4hXUVu3spE7h4L3y5Fg-acNivaOi5dVfxQJ-7w6CSJ8DXBACtwB5qsRcuY7NPDwOl0cGzFyeM_z", category: "makeup" },
    { id: 169, name: "Lip Gloss", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTnGE-Aiy5KCkepNk-3bwfwp58R069d_5wgZqgNyq2_x6s38VRjDhFKFQKcBP70h2YWj-2XI6FFST6ldgoMGtuMfz6II3S5MnB1oZgBn9VM3APYybYVs46dA", category: "makeup" },
    { id: 170, name: "Kajal", price: "₹149", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPqMzc0z9Sme9aZ3d9sWIdM68AIALo2dxcwmwAf0HLY2CbfpVrB5148io1oXxYTQ78OsiSslB2VwoicmzFm5RfUUZUgwuPM2UWU_TO-Hkk1DWaySnbvGfw", category: "makeup" },

    { id: 171, name: "Makeup Brushes...", price: "₹1299", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh_V1BmT43jFunwDZl8yoRQmgt1ZlgCo6f4gRvOGhx0TlE0ca3LZIu1bgFKi4L2iV3IaTsQRZDMKc_N4xWwpQofGK7OjwoneBNDy3fZL8xCd_nMzBnH-BF", category: "makeup" },
    { id: 172, name: "Beauty Blender", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRD8hiGZqKbnvB-PS_BwCt_6IPgagp_gFzHfOI65L5txwazxo-CP9nfAP6aCj5y_6sqSk49kHbCfAp_iC3l74wVMQCRFiQC0hflgraLPDIqUdpx_HywZYX4", category: "makeup" },
    { id: 173, name: "Remover Wipes...", price: "₹199", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4Bj-VUei44tc58exJAyhGm4PXyoYYgnTd7hO1ssencxJBvwFTsQSUnznNgEaDidUTUodR6Cchn15sKn_LKIylMjYwtpBSa5dhnvKbA7Ar2LfcNh1kue4xJw", category: "makeup" },
    { id: 174, name: "Micellar Water", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8Un6MURpkFRCV7uGZ_KsWb55N5RpW69HTXZHZEgPILoA9wxQPyoWzI9HNPQbS2WB34ZN_BVSN6k3ccSFj0SUehvnkduWt3vo2R7pmG0-QkZQ7e2xouip6wA", category: "makeup" },
    { id: 175, name: "Nail Polish Red", price: "₹149", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRE7cYeRcSSOAhovvdnS6d-Pqi02dNBCwgWZwLIR9Eahi-XGLQw_ExPYsgnMzjAZS-RQirKy7scaCA1SFdqZfUarE1XCmElNGyZ32I59yDrRvnv2Rk6w6AW", category: "makeup" },
    { id: 176, name: "Nail Polish Nude", price: "₹179", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS2XcK-_JhhOL7fGYdUT_FjzizQIi1zCkEtcVoglZCrEUM9UxP18bzuSJ1kcG8h51vQXBT04E9pA67twxBZLP_9Hbmid0nONEidGx7qchYJa28EpMm3dUImgQ", category: "makeup" },
    { id: 177, name: "Nail Polish Glitter", price: "₹199", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT9dGDo8H0fh51K78qy8Zn_-DGmll8JtPlEI9A3ClvYVZutoaMoSyozdbPOb17vGWfIG77RilAds4h4ulApbSxF6-StfuZYdzQuwwK-LEPzPpGJZYjcSzAc", category: "makeup" },
    { id: 178, name: "Makeup Kit Travel", price: "₹2499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvnTIWcss097OTPcCdTkGhX1LE02rUZo0YErQwI0TLCFzLpZyb3Bj6U6UPW69qnihGh7GiTjPcY2xMDcNKi9NJhUPtwwJu3pRwIxe3PVAb", category: "makeup" },
    { id: 179, name: "Makeup Bag", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIDDvln2PnuEzSnO0qE47myIss5O2wXx4z7v2sThC6vunZhBDqqD2c58lIkozB2Jwsg-5cTpHLSD5PieytnQE4Er8YnUvZCNYFkxxmBJMK4I_f96Hjs1uq", category: "makeup" },
    { id: 180, name: "Face Serum Glow", price: "₹1499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGDuZqR7VB_U7xLl5LjgsP51XHi48oqCNtCDgCX4oFMaTVAFpZWa9jyVxKoneuBShTchXNaW2YdNrs64lS4zNweG8nYQwEULgcXj51Z6sFidrIdRmhLfi9", category: "makeup" }
  ];

  let shampooProduct = [
    { id: 181, name: "Herbal Anti-Dandruff Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzFJKyk3CC5jhwrALwz69PcNo-gp_CiZtMNHXbCbMp0jotW07KhDIgKvt8742E4qVoJsNze450hWBiDGKDqGLJik5ycKIboKCzbxQSIGi7MxPYeGSyVfEf", category: "shampoo" },
    { id: 182, name: "Keratin Smooth Shampoo", price: "₹349", rating: "⭐⭐⭐⭐⭐", image: "https://m.media-amazon.com/images/I/51OraU3yvFL.jpg", category: "shampoo" },
    { id: 183, name: "Onion Hair Fall Control Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbX8qoLSTWB9tXWRrr1e_VPs0DIcX1svOVYRoj-9tVY2P6LajtQNzIx1jSf620242Yoenb3QO8UxqHjXUmGeU7PUuX2nRqSzU9zGr1E9w3gUUHwYKwamds", category: "shampoo" },
    { id: 184, name: "Aloe Vera Gentle Shampoo", price: "₹279", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ228BkfIDYTQNA62Xbn5NGyP0DZeBBlk3sa-wxmNygl5PMZsrYtIA2f8ZVwkPcQ5jutcDLHtqYlGriQG9s7wwSIsFHOk35-f_TbtnleszUT3jnbt_7Wb1NHQ", category: "shampoo" },
    { id: 185, name: "Coconut Nourishing Shampoo", price: "₹900", rating: "⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8dQz1km0rVMEFPgRVa30YQZgNWymeJW_Fv53ro4R2W5PquBZHV-2f92VRzbUv7Uj4zaBzvgm2VaYsVTljRX7mtC2dv-ciSKAfca-t8jkZVEaGRNnlArFDCQ", category: "shampoo" },
    { id: 186, name: "Ayurvedic Bhringraj Shampoo", price: "₹359", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAGqx5VVsFP2HMlAq9mGfhE1Fmb_soUBItDx8rRbXKlfixIwzOKJQHlj3cSs9DIfn0Lwqiqm3dCdDKrWQGOYuyNLR7dGCZfEkin4I99nJJhh1HD2Wb8eBdQ", category: "shampoo" },
    { id: 187, name: "Tea Tree Refreshing Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwJLBBSsDT0uSW1CtvOkmkYyecZi8MhWn7ihhibq52bCHhabbpsNDU8oJMwxomBXBWY0b6theETTmpy0Tc7fAHiYETwzvFVbB9DPhVoTCw-mkDUDPlDXyH", category: "shampoo" },
    { id: 188, name: "Charcoal Deep Clean Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScQgHbDhcFBDuC8Ez9t-I4ZTypl19mhRwLiqGYWFoZxj6Rls7MX1WnoU0BNLrSvKV7CkgH-QpdO-mVjXr4FLrJX9UnI8UF4Zz0-5I7-n81zvK1k3-heivixw", category: "shampoo" },
    { id: 189, name: "Biotin Thickening Shampoo", price: "₹499", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwkztLJHK6Z5Cwlj3HEc89yK97Dtvj6nytzDwzFVvbQbX4gDDMLPmswq_fcg9OaD0eNVMhYmuDFzPp-Dht0R0jYUm1USrtOTPiNnWv06FACD5HC_GZ3wIB", category: "shampoo" },
    { id: 190, name: "Argan Oil Hydrating Shampoo", price: "₹900", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8g2QNRI3Gg7c-GBGoO9fCIbWcCZ3SjhcIVl2PcRD1vTkoSmvtOcRxPgDCmih3bDcGsf3XfjsVwA3Jj_AglH3Z1lklXBezhk0SRLTPTydybPRyqczWnA4y2g", category: "shampoo" },

    { id: 191, name: "Volumizing Herbal Shampoo", price: "₹800", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRC2mEyTXMiOnM-UJ0gx3IhaZbWAji4eizzhrTV2pHhaP4orMXGd1YwYWJo1NQPtvjTt4YR6RRSrgukHGoRffonPGkAehd9sFLK1J_wA5R8Ecxv8YYXANMvVA", category: "shampoo" },
    { id: 192, name: "Damage Repair Protein Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSf7FzA2RJHZLvl7JNnx1YeYTpFYXYexzO-21-OrdGFNuQ-WSHsinR7KCFBczb8brgIkPFvsLzdPU8XcQGmi6uuoQor0_EOvGF4e7M-FsRzCSftjhP792IS", category: "shampoo" },
    { id: 193, name: "Silky Smooth Care Shampoo", price: "₹349", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRB6QdoAOK4YZSQQRrSTA8-swzOkwm_YLM8f3jEO0I7oy9tAvEpkUhzEinxWHQludopl1jMu6MMisIWPVkn6pTQOSjzMXromv0nVkDETjECA9CDQtp_pD0R", category: "shampoo" },
    { id: 194, name: "Rosemary strengthing Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR69qxzNPhJfnFgFE5T-s4cPLw3rXsL1Rtv9lSxP0XEOiX8dD64poiorMcnTBndFi5dpFwIeO1dlUlrqxLygstlW4I92cZsili9_B976yTJc9fjMA787luJ0Q", category: "shampoo" },
    { id: 195, name: "Lemon Anti-Oil Shampoo", price: "₹299", rating: "⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQT7Cod9VtrGqGU-UEOmuLUzm9UdPF1kS24nLq9_hn9hOHx9yCKnHLSPBC92R7J44LtBF84ZCcByxVjyTP1ciTxlgnGjYqARMmyoS9yNTSZ16OIIwGhlaFmOr4", category: "shampoo" },
    { id: 196, name: "Mint Cooling Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQt1n-Gwyu0ykoZJdu6AoQZgdGckdR4IPKhKGkJBoDfBUoM_i3axBbjqFHRp3clACA8ZZa-QKwtegbE5ud0KD6CvbJS8KkeESoPSX_Sd970tld_wL2AHQ04", category: "shampoo" },
    { id: 197, name: "Charcoal Detox Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvEPiVyrVeTyzLgNu8uhZs6B9-YkgSzHuNOdy9m8beSvFb0EVM55hP6dR40G5xRSad2HUEeq25FDemFvJ2u0DiuF8SyJSe7nOHlDXX7hmjIYbAtTfOBc2r", category: "shampoo" },
    { id: 198, name: "Onion & Black Seed Shampoo", price: "₹459", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdYWom5ErUC-aK0NS84We_biyPxbQOHeKiTAPjW1OsZsGoVpUmY15PuzBSmK--xnd_GWm5U3RDZ-LtsWqHz9t6dJewnyon277uFOroemMrJHJyyKRsA50F", category: "shampoo" },
    { id: 199, name: "Hibiscus Natural Shine Shampoo", price: "₹500", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwLY2BvfuNPWU2xc4H3aAgVUC0uQ45rAo79xAOXiGybq_v42eVlGHxQl_EFBjGG82x45QcywBQiMdGkWa8nLqldZ-6-ozz86mKCH7P8WUt5JN36n4ffaPuEA", category: "shampoo" },
    { id: 200, name: "Green Tea Anti-Hairfall Shampoo", price: "₹600", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQg6x4kjZ9Kw4Kx-4nBJwP8OvVsPJoJT506bk_2RxOQVL2E0RHEuCGgrint2pLCph4WwiY1f58XErsVBAZ690UrLWAe_kAO3AH4bEaJWMEDZgrDXcxrNOBkQs0", category: "shampoo" },

    { id: 251, name: "Coffee Infused Hair Shampoo", price: "₹499", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgeKqmXOyX5cRP0N4kT-_MjQR2k0cz2VpodVj-Xj9TDQKRHZFl4qJZgsq5FX0E7pA1hACUnfnhLsoNbN1JQJSkqdTpOo5HFs4koaUp84GFHAwi6EA_6uDB", category: "shampoo" },
    { id: 252, name: "Amla & Shikakai Herbal Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQemzyKAt4UnRZV6cVK_VB77q099Z87OMdt-MOnr8bMMhdEtMGmuxUyhTX6qf1TtX_kdvt4qFEhAT0XzQ3eanrqCfULU1TPDN3m2O8e3rKGTcg8F0ceTlu2d_Vjktl9qP_O_BWZqA&usqp=CAc", category: "shampoo" },
    { id: 253, name: "Keratin & Collagen Shampoo", price: "₹549", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBluFpon_slxlhzh6HjpKPZa8nBT_dCdoazggCj4h6yvE-IuVHIM0qYgOedc0HhgwRpw-pnwlbkHkDZH1hU5LL27rB3UpBwFWEZvczje-4BXkEMb5AVDxp1g", category: "shampoo" },
    { id: 254, name: "Protein Strengthening Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnY6NrsQqN49uzQ1vchFizIE3zFR6WhNA0qfc34WFBjmG5tRaEsYcpWbU_9cc2ArLg207lpjZ3E7AfGbbURuzp8BUm4YPzD8vIJ6ZIbgTVfJI7zhgY7rLYSA", category: "shampoo" },
    { id: 255, name: "Natural Reetha Shampoo", price: "₹329", rating: "⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST3iTKS4EA4DaRlt0SK9y44HKUR9M_Hr5eeqigzVTVULNLCXJyAIjSk40fAY8VshchiAbrOvbj1Ysf8aYN5IJBWIJLvTrz1zgaeEjXky4Nf40qkH2OnQ_R", category: "shampoo" },
    { id: 256, name: "Soya Protein Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScHiP9Eyo5gPG6Y6Zeu68jrHuws8dTjv8USCDw5rk8iE_dZLqjMeiarHbfsCnli_h_xUZKenF0kr5Orp60eCHlycx6v0R-0SFDVtp5o6KRD8rs6_J2psxLNQ", category: "shampoo" },
    { id: 257, name: "Moisture Lock Shampoo", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF3AIDL80kt-lhjgx_nJJjg333TdNaSFgPya7lGDTldHDvw0qifIqtUfd-sfv4aHV2ubt6LCJKMGKxbix6MBnMrpU3MP_TTjSXFRycNvZ2aVgTjdbXQPFF", category: "shampoo" },
    { id: 258, name: "Vitamin E Nourishing Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRy-xDe_gb-KHv6AioJO56xVbTj7zGnhBbX9dcatwydP34r0MODON0IIb4ODpxKHuV0bEQ5lQja91TBurpFq52ra8tr0l9eB_iw4LFW3l2BS5xaovl2slXKTg", category: "shampoo" },
    { id: 259, name: "Keratin Complex Shampoo", price: "₹549", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuZlHapUAKQ6eSitt5ErCxlBSlOQ4ky_kbQq0WSqLUhAPgQec89BBosE5n3qIc7J2wKW5GyMCuXLEMBR6S2TSKDgKvofKut1Nvl0sROx-5ecghQeejL1gB", category: "shampoo" },
    { id: 260, name: "Olive Oil Care Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHx5ymcxzuEg_kUJYBWadH4mzMzqwPkiB6G116I1D95EaPIeOD37TfnSGPT2O88YCnFM5XoGQCgyZZYESTMHTGtGW-U49N7xtTabnCsG67Afcly9aFbRXHNQ", category: "shampoo" },

    { id: 261, name: "Anti-Frizz Smooth Shampoo", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfz0Xn9Eu3gqnYSg5YMJQiu6j-NWyytYl3qDojqvjvypE1dBmZq_2irU4wuG3EMlsDymUg6OKTdLjCKyjJuMqGuU-Hkb0jpS5jPEQXgD2NtJOYmJYN0pS", category: "shampoo" },
    { id: 262, name: "Charcoal & Clay Purifying Shampoo", price: "₹479", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEe0GzqtkOSlARlO5F_qSiHbXojt1Zkek9rzWI8k82Age0GDJJegjin5-qStAndDWJFIOgvxKvUazw1JGAl1cJ_JNoF0qIM4TnntkGJUBg7q66rrX5cigkUw", category: "shampoo" },
    { id: 263, name: "Aloe & Coconut Hydration Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGHfH2xr-gnRP9JSLza1tCcGr7Rq7q3OPyf8dQoX-_M5VGjpEJ117FP30avZ9fdH0rIV0fqtZ8W4QqPg5yFTfdnD0W1yD8vOeQb6e8w_KX0UfjussLR-Lf", category: "shampoo" },
    { id: 264, name: "Neem & Tulsi Herbal Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNMTpI5XD1FO1Ys1zb-o8Gzb5YZrqjx6iqPDlqxEab45FqSd7aUFnDylYOiTZIIiyIdmL6XoPLYWwMkNfyjp-yTGSTszPKQmrigS3FRB-urUFQXN0SsuVCgw", category: "shampoo" },
    { id: 265, name: "Red Onion Damage Repair Shampoo", price: "₹459", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNtTpcxTHVxU7LVelgNKiXxLxfuJG6XowrtkJxVrDkAiFEDA2ZqN1hQLrSWtMFdR_NaYGH04EwPOvEYF-v2kxq1xUwMyxmvlfRLSOY5BAgx9XuDSKrCjpS", category: "shampoo" },
    { id: 266, name: "Argan & Shea Butter Shampoo", price: "₹549", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRH2hMFiPnUsKO4gwfBRckn_2gUuTlvYjgdljMO18LH_87nP-6WzJdDJMxBIBVs-uNxeBJMFJwLatxlP8DozviE0NIx2Fol0hezUnXgD9ncMyxkLZs30p9d", category: "shampoo" },
    { id: 267, name: "Keratin Therapy Shampoo", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoXjS9wuWBjt-5_6ksfHY-dwb64RiZyUwqRMPb3OmKYfVs8XcXPv6acdm_62-zU-IGJgkOHG4pNtDsU2fE-QaAuYkoS1-YUOav-h0mqpefsu6QtIIrGl3N", category: "shampoo" },
    { id: 268, name: "Biotin Hair Growth Shampoo", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRk4sRPBV1O1U4oaVj5XiYEcblmAYOHrDOC8oMIrDWlEvUGE45tCx8aIOe27VNgGy321C_ltPuMylzgyUQVXOqxV4b7DLIaImpX3qZ0npuPuy4TcSL_xwzU", category: "shampoo" },
    { id: 269, name: "Oats Gentle Care Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCXSfiOexjO7VJoJZdQCFgKkAIAPXxlJyDhcWr3ngVGzHazHaHQVt_fiPbmpur3vclRcZ4y6y2t8ZkzkSWJP5AwIekEvjK1M2XZS4PmFKKDbseMs_CkQZ1zQ", category: "shampoo" },
    { id: 270, name: "Charcoal Volumizing Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9aGtL1fM8HdgCBCkjo5FELuM4rEEpem9yzvsaqmmZKNwByOqqCncRIEhm7iIaZ3IBFPCQ0Yi951_doawc9ORuC5VPs4GWyPDXHDyd9odRnXPYTE2lg8i9", category: "shampoo" }
  ];

  let skinProducts = [
    { id: 400, name: "Moisturizing Cream", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOnQPBlQ7bTb-3tPVoasRE7fOWYcgwGjEDRx0c2d4xJ30EBG6nLVV8cO7crWJPJnTjGjEG38SVjea_2h_HBzoawCUa7IyEH1NteT5iDQucKKu7W7jtJig-CwQ", category: "skincare" },
    { id: 401, name: "Aloe Vera Gel", price: "₹299", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8S_kMhiaggJNjWglU_w4M9m-1bno6uVdg2AogfT3mdEmrw_Z5CtlT1LhQejTQlUQ2ZGy51QwI7fO5JSV7L6pUwBbpqbyvLMCHPO6Oe-gjj-RcyjQZWgm0cg", category: "skincare" },
    { id: 402, name: "Vitamin C Serum", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpb1Pi8I8bBWDq735a6yxdaA64ebonNDeHunVXRlPuOIXfsyFbEyavUAucLfU0l4erBgw5ipUtmequYvplZajNUH6PTMM2RRuq4bMu-4S_LAJjIQFDY48I7A", category: "skincare" },
    { id: 403, name: "Sunscreen SPF 50", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSsJF5RgVcEKfqcUzQx9Nrel4ctn3GyR7RU33unaLzYouOI4ntagBMN7migmpnPlkCqXGxW9UXLmFHTDeG2zpHFM63vE_ix05EbdgGkluQIIULZ3rmViwngSg", category: "skincare" },
    { id: 404, name: "Night Repair Cream", price: "₹899", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjPjX2J2GqvYLYqN8pW59cJZgG3Jev6w0Jv07YE3Q5gHBq7eoPjaJ236TwE9TDCASxD9awOzvbKE3HP9FjYqspxMAfCRQLJFykICOYZ6zE5tXuCuNWgonB", category: "skincare" },
    { id: 405, name: "Charcoal Face Mask", price: "₹349", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjBZ66H8cpMXmM1MxlsxRhflzJP1DzPWJXvnsSTNFsCQzChcnIQ0h_3u-Y45cO4WdKxcSLj-cal8RRZqzc947hY70fbfnPRbdUZ_nRm51IS-eP0E2r7z6XxQ", category: "skincare" },
    { id: 406, name: "Face Scrub", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMCBgAH3wcfA5x3NjqI8moMEyWDEnfP3qafmO09p39VPjTPw11L_7t_NlKMtVlvkfbVHIS5W1XqyKb-hYOSUsd4getjeufvmhuKnlwiKoHDE9cAa7oE4En", category: "skincare" },
    { id: 407, name: "Anti-Aging Serum", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcZ1BVK8OWe8JSg2rKMPvC3_Duv4mnFXWOb1zToz6QgMFupFoCpfpOBnUGETt0t8Gx5fe_Oe2UHZ1pKCaDL8KGKDOUR9a2asWDNBEd-94y5YLTgBKAd3OpcA", category: "skincare" },
    { id: 408, name: "Hydrating Toner", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSs6kn1v07rOU5STEP_5FNLGpT-uW855pU73TG-rAI0r79wFVWLk_vMA2MngzE9m8gq_ZxY2UKB-jF1a0c7AfTANtqN-aVjMnUSFZg-Cs-SlZZMHv1hTkMHIw", category: "skincare" },
    { id: 409, name: "Acne Control Gel", price: "₹549", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhrVgh51bDimcvVZfx1_DzJpWM_cRO4M_il4dcMJzW3mrzGvBz2GYQKHdLe9-QpHSVE-11E7Cl-HxvLlyn8F1u94U9FleeRlH4TlSaaWqKndf1Ue9CgS8CvR4", category: "skincare" },

    { id: 410, name: "Cleansing Milk", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUQz3H9gOKN5_FzGCzK1nQDD0mZjk9y9Pek4v_o3vx1buLfrXB5a4hpahB6fdBLmcljmdSux4advWpd3a76gr1gW5J-7T2NSFz_v4B2MnKDZQeoqU4VwjXpg", category: "skincare" },
    { id: 411, name: "Rose Water Toner", price: "₹299", rating: "⭐⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5jodk0vTGrqvF2Id1zaZaYe7SJAs7-zhXtHJEzHNi4LVuqVpCS-8-4kS4gvICl5jbj6DILNJ5LfFpUY5beSrMmgDG4yO0EwicieDgObmNN9Vn3e2U7G2_", category: "skincare" },
    { id: 412, name: "Brightening Face Pack", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQyniT4GxTDQ0nZSIR3kZKFdxiZSxjtKkq5PKf6ppOqMkV3GjqLVDaKhWzH4pJnet7aLtf9MTcpSn9oP_ZsVNykMEneChJ4qoubTWnvYHyK5Ryjdg7e82tfnPA", category: "skincare" },
    { id: 413, name: "Hyaluronic Serum", price: "₹849", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQK-1IEPoazmad1E83iekeRZez2BiSqngLX9Q00mJwz27KKikUg3A-tVhFXfiE2uPtc_qTG7eCEZ7SM52EekKSPRjcjt5l0I2SpDnQIndwnuVOa6LXb6kFU", category: "skincare" },
    { id: 414, name: "Under Eye Cream", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvAS_cW2BsxqtY3bnJFuOALZ4FB8p3_o_6Mo9N0Z7CruD6xXRDgkJ_2SqtpRm5k6QIZZAQRnO_Fged7Rc4lS5QFaffv7SrDSREdEgwvtiwHQ2TsOU6gYa_7g", category: "skincare" },
    { id: 415, name: "Face Mist", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRO6K8y5w5ZMPlOFZoLj-ZCaNgru-nOp-Vylu9OM83hPyuVfd2-zXNJcegNQpjzz-6ZPQl5rXXCmvlqKfmuB_XHlrOEsGjdqGYvgfVbb1Asy3FgGlmo79Ct", category: "skincare" },
    { id: 416, name: "Clay Mask", price: "₹349", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaELNQfp1QsaKEHFBlyAWspNtQNsL2bv5e16gJHc0kloCBzXzn93Yrcm4aLuxM-nzRYCjI72g0k2A3syqutfhyF9JB21tOrTkNRP6Dgs3E6mGzLvgwtMDyig", category: "skincare" },
    { id: 417, name: "Whitening Cream", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCTt4WGDBWfSVWcVUUlb89mW1_e2pTRd3gE51_XoQyPsr2LlkPn94R1AdHrKPNbQRLFFxSoGdkFa9G8R_KbXnVR8E8KeUv2dNKwRrv1mUT5rvkF3yVGkrl_Q", category: "skincare" },
    { id: 418, name: "Facial Oil", price: "₹749", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO3EyMqB7tZW1tj-kdGzzg8cmKESKivBdO_dV_pd9zh_ti5G1W2pXEqU5DRQUmSGdaHHp4BMGe2ScS3OxfQdGRZ5DR3QiZKRIAztIATqEbsSI4yDyNVs8h", category: "skincare" },
    { id: 419, name: "Pimple Patch", price: "₹249", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSRPA3537uL5z1FM82n4eO2MvZuWTRcinTTa1YG1Xh_KTnaJNpQoAiZaP6nRAwQWnQobnChnmXUb_K4ohJOW2L2KA1U9KVfech1zteH8L0szwX_JslYVtFwHQ", category: "skincare" },

    { id: 420, name: "Green Tea Face Wash", price: "₹349", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSB0o1CPsiTgcCINOhDHkMBy-pnDVCQ-OcaC94ddLlIiNxGtUQV3Oc95Zt0H7Qce2JztaSrV_Q_7y4yTDa8U4T8z9EChbi1S2lsEVCxwjvtBTvKx8n0g_J3", category: "skincare" },
    { id: 421, name: "Collagen Serum", price: "₹1099", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAMfrMdmbmKvfMMXou8otKD0GZMtJNxOAoIYAwVzE2Dt6PjmTAyME5lrTdD1u3rAg4HGcmJJNNmhKy_-80S4RclTT0sZ-guCGXNWUIqlli4dDIpOWF_ctJHQ", category: "skincare" },
    { id: 422, name: "Exfoliating Peel", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRrhooh1oILZ5RRtrmdQBnrGTArlycw-IBH2u6KVYZjTpOAB1L_maOGA0iQmVL09gCJaUYY87plcCxSxpW-7jNcS1HksbsBCBQGdzT7N2Jwv3wcHole4IGrtX0", category: "skincare" },
    { id: 423, name: "Shea Butter Cream", price: "₹549", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJgMPxc6Q2BMEBwcteVs7FLFE3VsXI4hnQ0t7kAS5CykBikRIm10I1C4lLd_fsvTgHqbKPj_HySwiyRPgCsNoqCistNUGVtvxAl6vTRkg0J0__Qk5ATZsunMA", category: "skincare" },
    { id: 424, name: "Neem Face Pack", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSmGE4kDYA6HySc6bzZFo3dKrgXhC7v2w2VRT4lxU8G2dfM_zE35GSTuml99fRDSqUIjfav-xuE8TuIinPI8ngmaB3fLgQjHRcDoR6s_ZiiXMHAJ_4fTyGZQ", category: "skincare" },
    { id: 425, name: "Hydrating Sheet Mask", price: "₹149", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4M1O-ITX7uJ3KM-mbYrcPCmRJbo_5sxulNOAn8yFw98Ru61tjpfIkCEsBgf_1LPRDkcfFrj-d35ugffv1KsT1BXvXiou9U_QZBJ75s8gndORPUTdSUYcr8Q", category: "skincare" },
    { id: 426, name: "Whitening Serum", price: "₹849", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsb0IKznUpr9FjJWvXMv5BeaEemk_j1Cu_0v_m-UkzN3vaxCsscrRhF5zZJItcrQbX7KYidfgndAaxeYe9O9SA9YW7JVY5VaGvTcMx0GM2wTlfJ3JNthtE_w", category: "skincare" },
    { id: 427, name: "Soothing Gel", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQznZzC9YMTHVvlWm8q5WunB7wgGiqAeSEiVGHKNIg9X7BlZlk7T9VEZ-ipVSYTE3y3djCK5dmzrt1zIUUTGiGqQNokUmEDx9Cuf1XknZp0MSfAdQ0zDiBRHQ", category: "skincare" },
    { id: 428, name: "Charcoal Peel Off Mask", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvZ_tfYOzyTKe-vqHga1f4wW7Ap_cLgiiq3QaOIHl8qH1c4Fbloz9VyYcmo3San4d0cxgv9WNWyjWb2eems6ioQ_pxcksGtF9g99_3xgqxHtitQzQ-oRwg", category: "skincare" },
    { id: 429, name: "Coconut Oil Moisturizer", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRL9tCErFi_6KxUE1HfbiINRvXdgcyYamOk6n9cZZpdQ9Xo3feAoT78e9krXCfvf93_vDus1n8-8SSyg4VybScVbMeZe64p0wupV8CmtWqIppkxk0mRR2QB", category: "skincare" },

    { id: 430, name: "Papaya Face Gel", price: "₹349", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQA00vKo4Rf3ZsuU9jqqvg5E94QHhjRWjuKw7qafErwH5-KMR5FtTDD-4Eadv7cDbxWh4-9d8_4kacLvHGjoqjp-agi8ONL-SZMEIfQXeRHtXFoY9tCHGbt4A", category: "skincare" },
    { id: 431, name: "Rice Water Toner", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXmRnDkpqo0RQMuOxcnKKW4AtPw1_VVPXEKDAOoArdNZveWsw_n8LmSQhmjpZe1kQAQWFBom4JJ_LqcNulygkOtJAxqGxmtKhK3ho5Jiv0L1E45IjfMJPK", category: "skincare" },
    { id: 432, name: "Deep Cleansing Foam", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUIV-3r7rcDsWg4Gs0ldY1L6RMs-gQP_6zrH8GW9D8EGL7mata_Ca4lQ99LcD7DU0o6i-1ngLzLkfhisVXtrdtJqbleSb15jfbnkYsZILWledM7vxgvf-MVA", category: "skincare" },
    { id: 433, name: "Tea Tree Oil", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSV7k46dT-8KkZz2fIuXCg649E8x68jxRjrMVZP77eENlxuxI38eaVNVVhe68gnMxXaMzMdlU7hpF6Im6ClbGZ5DUaDeV-jRVUqeVfWaOUWgGmPdxfWmFD_", category: "skincare" },
    { id: 434, name: "Brightening Day Cream", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRigOf8sdFEjqStWbPFiInE1I_Zgc4t-Zc643BaNY4HE9NvCWAGhU-s1v-7WyLJZutcifKMlUEZcz1NDAq1cmTTbXKlwxMFlgGHlD00i3GfOr7eFJzWDrNogw", category: "skincare" },
    { id: 435, name: "Hydration Boost Cream", price: "₹649", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOr0z0r9B4W0WF9nqUGi_dKQDLptU1gNV5f47J-aJPQn0OjjvIiT0-oCY5JOu8fOx9SNLvgZszpGPrDToJzoNPGdLjHke1PXFUCKRoXzFNAlMgPW2wkayx5w", category: "skincare" },
    { id: 436, name: "Vitamin E Oil", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQdyR08Vh9fLlYsKMaFxt0Mc_19wqz9Q-jjWm-EMIJulGYLyrVUa1A3SP3ej3zYBVqwj7EpDlk4-syEMCFuckK4CfAoniqTTrIAQUE49EuO0eqbRWeZbGj_uw", category: "skincare" },
    { id: 437, name: "Face Polishing Scrub", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTxOEgNI4iEkEIc2qleBqYNFemStu1PdT768HQcyeL_U8ImrOpQyiy1O2uGFamSpTFu1zd46VIN6mQEVD4wXc_3Dd5LPiSLZUqWtlzje57CuhTdjYyGx3-I", category: "skincare" },
    { id: 438, name: "Anti-Wrinkle Cream", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6jVC8tmb96OjSsvtr0BWlUZq1I5ynWSMe3is95SPJeniNjjl5U7PWGYw7lQ8Eo7koW8YEUOQbSXSy4urvFyTOAk2n5m-8nro18JXcXv2rjkba3Y-tn6BE", category: "skincare" },
    { id: 439, name: "Hydrating Gel Cream", price: "₹849", rating: "⭐⭐⭐⭐", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQID3Oo0FWFTCjG4bfbGMmsOTOdRRP52d_Bf5dqQupiVV2ZAazY3GgX-DvojofnTJHN6Ya5KrAUeDB84i-CEKeQR58Xvfrk-3rDoigkj326AQsFMeHt4JbDLxg", category: "skincare" }
  ];



  const winterProducts = [
    { id: 501, name: "Woolen Sweater", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/79/f0/1d/79f01dcb2265aa6ee6c2d3801ebf8a22.jpg" },
    { id: 502, name: "Men’s Puffer Jacket", price: "₹1,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/02/ca/fe/02cafe59b0c598a57c86ddbceae1080f.jpg" },
    { id: 503, name: "Women’s Fleece Hoodie", price: "₹1,199", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/8a/33/f7/8a33f73548ef8a96be7232acb3379d5d.jpg" },
    { id: 504, name: "Knitted Muffler", price: "₹499", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/83/ac/5b/83ac5b46a92eebc2f830cb74a3860e68.jpg" },
    { id: 505, name: "Winter Beanie Cap", price: "₹299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/64/2d/76/642d76d94267dc0de0ba1362bc099633.jpg" },
    { id: 506, name: "Woolen Gloves", price: "₹349", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/fd/71/ba/fd71ba3248cd9ab69bdbccc19a033f58.jpg" },
    { id: 507, name: "Thermal Innerwear Set", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/f1/d5/3a/f1d53a1874d449dc04b752b38b69a529.jpg" },
    { id: 508, name: "Fur Lined Hoodie", price: "₹1,299", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/5e/4d/72/5e4d7251eaf5332a9d6a727b76f35f7d.jpg" },
    { id: 509, name: "Men’s Woolen Coat", price: "₹2,499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ab/ba/78/abba7874935ba300b730a7f554975e23.jpg" },
    { id: 510, name: "Women’s Long Overcoat", price: "₹2,999", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/a6/9c/94/a69c94fa5d498e8cd0426f1efdc665de.jpg" },
    { id: 511, name: "Cable Knit Sweater", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/22/21/34/2221349e7d35d8a6590171069c68a2a6.jpg" },
    { id: 512, name: "Faux Fur Jacket", price: "₹1,799", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ed/03/90/ed03905166d881f6b4a7f9fd9aa07e25.jpg" },
    { id: 513, name: "Hooded Parka Jacket", price: "₹2,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/6d/e0/95/6de09529e3a12d69cef0275fd80aecab.jpg" },
    { id: 514, name: "Woolen Socks", price: "₹199", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/51/30/73/5130739649a50ecc89c9c6b7d66c3ca9.jpg" },
    { id: 515, name: "Turtleneck Sweater", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/37/c4/d6/37c4d6207a44fa64e0e219e6e2d8470c.jpg" },
    { id: 516, name: "Padded Jacket", price: "₹1,699", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ec/5c/db/ec5cdba530016de937f668c008fdea66.jpg" },
    { id: 517, name: "Fleece Joggers", price: "₹799", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/d8/e9/76/d8e976eb1646ac1fafc55aaa9a0cb2de.jpg" },
    { id: 518, name: "Winter Scarf", price: "₹399", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/48/38/e8/4838e8048059ab229db2ad2ffc7b6bbc.jpg" },
    { id: 519, name: "Fur Slippers", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/52/71/22/527122d50b56ff2fbe52c379cb2e5bca.jpg" },
    { id: 520, name: "Men’s Thermal Shirt", price: "₹499", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/0c/0f/27/0c0f27ec2dfce7a7fcbad6e955291772.jpg" },
    { id: 521, name: "Women’s Thermal Leggings", price: "₹549", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/5c/04/05/5c04059fd1695dba18ae1946ec846bb0.jpg" },
    { id: 522, name: "Knitted Cardigan", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/8f/b3/97/8fb3970fd3793284eff986f6ed9a79f0.jpg" },
    { id: 523, name: "Woolen Shawl", price: "₹1,099", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/d4/ae/26/d4ae266e50c788889f8ca1b06fc22565.jpg" },
    { id: 524, name: "Men’s Hoodie", price: "₹1,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/26/c7/cb/26c7cbfa0cd9874fc292c411e49d13a7.jpg" },
    { id: 525, name: "Women’s Sweater Dress", price: "₹1,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/01/f0/f9/01f0f948dce379888ef3c6e73cae7ab4.jpg" },
    { id: 526, name: "Leather Gloves", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/8d/55/13/8d551312afda0fcfe6f8efa3abbd9ff4.jpg" },
    { id: 527, name: "Puffer Vest", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/21/89/7d/21897db6094e79227465e14c8f814840.jpg" },
    { id: 528, name: "Wool Cap with Pom", price: "₹349", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/ef/5c/82/ef5c82fc2beef174c558a22cfd33e415.jpg" },
    { id: 529, name: "Winter Pajama Set", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ec/5a/75/ec5a7541f71e6473ca0c7c038efce2df.jpg" },
    { id: 530, name: "Blanket Hoodie", price: "₹1,799", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/9c/38/4e/9c384ecce292a02c01254607458283d9.jpg" },
    { id: 531, name: "Fleece Sweatshirt", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/e5/d5/a2/e5d5a2c5dc68f83a791d8886a5dcdb02.jpg" },
    { id: 532, name: "Men’s Wool Scarf", price: "₹449", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/04/63/2f/04632fbec883b821a105069802c28328.jpg" },
    { id: 533, name: "Women’s Fur Boots", price: "₹2,099", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/26/ec/50/26ec50e4a3c26c286e45f435d47c98d9.jpg" },
    { id: 534, name: "Quilted Jacket", price: "₹1,899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/e7/54/38/e75438ee381b4622b97db1a4eb41f764.jpg" },
    { id: 535, name: "Wool Poncho", price: "₹1,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/5b/e2/c5/5be2c58a7ea7153fcd5b9d5916181115.jpg" },
    { id: 536, name: "Knitted Wool Cap", price: "₹299", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/67/a7/c7/67a7c7715085b0f5c3ecdb479600cec2.jpg" },
    { id: 537, name: "Fur Collar Jacket", price: "₹2,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/5b/4a/66/5b4a668032cbf703e217a25774f58c14.jpg" },
    { id: 538, name: "Men’s Sweatshirt", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/f3/a1/e7/f3a1e7f8231db56fa719799212113336.jpg" },
    { id: 539, name: "Women’s Cardigan", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/cc/a8/80/cca880a52a2cf75b13bfd6ab18643887.jpg" },
    { id: 540, name: "Thermal Socks", price: "₹299", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/84/9f/a4/849fa4dcd33d305fbcefceaeb300f830.jpg" }
  ];
  const jewelleryProducts = [
    { id: 601, name: "Gold Plated Necklace Set", price: "₹1,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ee/07/d4/ee07d4d4cd446b5dea66ab2e866e4202.jpg" },
    { id: 602, name: "Silver Hoop Earrings", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/2f/5f/83/2f5f839deaff06aa24de9554456739ab.jpg" },
    { id: 603, name: "Traditional Kundan Choker", price: "₹2,199", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/0c/b3/25/0cb32558db99bcb08134afddbaf5d3b8.jpg" },
    { id: 604, name: "Pearl Drop Earrings", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/d8/a5/6e/d8a56e9ab5f5071ccc1b93d4b6804fbb.jpg" },
    { id: 605, name: "Oxidized Silver Necklace", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/57/00/9e/57009e9568734ae7bbbe5643daf6a874.jpg" },
    { id: 606, name: "American Diamond Bracelet", price: "₹1,299", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/a5/ca/b0/a5cab058ccd355bf7c7846fef7e5cba1.jpg" },
    { id: 607, name: "Rose Gold Ring", price: "₹599", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/f6/a8/b3/f6a8b323d766a4ec2a37cc611a34983e.jpg" },
    { id: 608, name: "Antique Jhumka Earrings", price: "₹749", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/04/48/55/044855e6e662feebebf82cf6d46408e0.jpg" },
    { id: 609, name: "Crystal Pendant Chain", price: "₹399", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/65/9b/ef/659bef2f210e94a32823a9e5f8c61a8b.jpg" },
    { id: 610, name: "Bridal Choker Set", price: "₹2,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/44/34/08/443408b627ac107998c2eb6b38762f99.jpg" },
    { id: 611, name: "Beaded Layered Necklace", price: "₹849", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/f2/e3/0c/f2e30c0b22f6bf10e94de7735ad81f94.jpg" },
    { id: 612, name: "Stone Studded Anklet", price: "₹499", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/69/fa/22/69fa228af0fee3e3d3e5b4e55e4da4fd.jpg" },
    { id: 613, name: "Meenakari Bangles", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/c4/52/a5/c452a58c9aa5cd9a3f31cdd053d9822e.jpg" },
    { id: 614, name: "Floral Diamond Studs", price: "₹999", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/0f/86/00/0f860084f34e8138a8dd4bd90a16faf5.jpg" },
    { id: 615, name: "Charm Bracelet", price: "₹699", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/1a/9c/00/1a9c000123d07a7975b805e60cc585a1.jpg" },
    { id: 616, name: "Gold Nose Ring", price: "₹299", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/78/4b/7f/784b7f102584e305b5fae4db24d301f8.jpg" },
    { id: 617, name: "Temple Jewellery Set", price: "₹1,999", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/e6/48/aa/e648aaf15ecc5ea7caaaf1a7125932d5.jpg" },
    { id: 618, name: "Kundan Maang Tikka", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/28/68/f0/2868f074cf687f67d774f65900b122bb.jpg" },
    { id: 619, name: "Antique Finger Ring", price: "₹399", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/46/1a/fc/461afccbcd46678faaafb51780293762.jpg" },
    { id: 620, name: "Pearl Necklace Set", price: "₹1,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/52/d5/d1/52d5d1d582822421560657e577ec3203.jpg" },
    { id: 621, name: "Gold Plated Bangles", price: "₹1,199", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/9d/5c/80/9d5c80582523c32813a6eac92de80710.jpg" },
    { id: 622, name: "CZ Stud Earrings", price: "₹349", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/4d/34/93/4d3493d24acba2bfd25b62f3c0b24fbf.jpg" },
    { id: 623, name: "Layered Chain Necklace", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/71/3b/01/713b011e5641ba421e71b473c0c8fd9d.jpg" },
    { id: 624, name: "Antique Bracelet", price: "₹899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/6c/61/23/6c6123956e9b12dd8dcf831ad4e103ee.jpg" },
    { id: 625, name: "Minimal Gold Pendant", price: "₹499", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/b3/a5/a7/b3a5a77562f2ba669c312d1a441fc446.jpg" },
    { id: 626, name: "Wedding Bridal Set", price: "₹3,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/21/ac/21/21ac21ef884ffc7bca9f673aa379ddd7.jpg" },
    { id: 627, name: "Silver Payal", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/03/5a/a8/035aa8803362bd0d6169d42370a07b23.jpg" },
    { id: 628, name: "Enamel Stud Earrings", price: "₹299", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/df/4b/4d/df4b4d13a07587b9e67966c8db77428d.jpg" },
    { id: 629, name: "Diamond Tennis Bracelet", price: "₹1,799", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/c8/e5/11/c8e5116d8b53456c5c565104adb1b320.jpg" },
    { id: 630, name: "Oxidized Choker", price: "₹1,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/32/dc/d9/32dcd929f20561604ce4c26151663cd8.jpg" },
    { id: 631, name: "Elegant Pearl Earrings", price: "₹449", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/23/ea/4f/23ea4f026cef5656c9086d5ccac3a845.jpg" },
    { id: 632, name: "Gold Plated Kada", price: "₹999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/ae/a1/20/aea120b7481e2c0c4e36ec9f65fadbaa.jpg" },
    { id: 633, name: "American Diamond Necklace", price: "₹1,899", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/bb/cc/40/bbcc40b95333b1e23c9c3c61d58e86bb.jpg" },
    { id: 634, name: "Antique Kundan Earrings", price: "₹749", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/a1/25/ac/a125ac455072d803d6fb8e43c5bb07d1.jpg" },
    { id: 635, name: "Rose Gold Chain", price: "₹599", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/db/c7/e4/dbc7e48582e5c281e4677cf9d8e27ed6.jpg" },
    { id: 636, name: "Bridal Nath", price: "₹399", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/3d/9d/95/3d9d95b39abdc9e955ba4af5502eb3ce.jpg" },
    { id: 637, name: "Oxidized Ring Set", price: "₹499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/12/28/dd/1228dd218c69f750736e38423096737a.jpg" },
    { id: 638, name: "Gold Plated Anklet", price: "₹799", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/5c/db/a0/5cdba0668e7e13ce85a796f200e26b60.jpg" },
    { id: 639, name: "Statement Necklace", price: "₹1,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/f6/ee/6d/f6ee6d84ba0b162f8c23d00ad13d8a0f.jpg" },
    { id: 640, name: "Elegant Kada Bracelet", price: "₹1,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/da/75/89/da7589a6aaeca366ecb2aea13bf48d57.jpg" }
  ];

  const winterBootsProducts = [
    { id: 1, name: "Classic Leather Ankle Boots", price: "₹2,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/68/79/0b/68790ba2cb1b49f3eada3cb43cbd136c.jpg" },
    { id: 2, name: "Fur Lined Snow Boots", price: "₹2,199", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/86/6a/26/866a263bc55c2c83ddc07b2f270b7f96.jpg" },
    { id: 3, name: "Suede Winter Boots", price: "₹2,799", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/d1/fe/03/d1fe03aaab3a8079483318c7d3e93a73.jpg" },
    { id: 4, name: "Chunky Heel Boots", price: "₹1,999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/1d/04/bb/1d04bbb354a4e797b3791c9e90862eab.jpg" },
    { id: 5, name: "Flat Chelsea Boots", price: "₹1,899", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/27/f4/60/27f460a4a7e1d358208d16525e710a25.jpg" },
    { id: 6, name: "Faux Fur Ankle Boots", price: "₹2,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/74/25/92/742592ddfcd5af5502d8d867ee71cc54.jpg" },
    { id: 7, name: "Combat Lace-Up Boots", price: "₹1,699", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/65/5e/08/655e08eae9d35c4d3bc394fc1341346d.jpg" },
    { id: 8, name: "Winter Trekking Boots", price: "₹2,499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/cb/8e/58/cb8e58d259333d0c28a2e9a0c7741cc6.jpg" },
    { id: 9, name: "High Heel Long Boots", price: "₹2,999", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/78/59/b8/7859b83c82b6bd9e12316a030fefe346.jpg" },
    { id: 10, name: "Leather Knee Boots", price: "₹3,199", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/26/91/ab/2691ab227f8ac8785132c27de43f155b.jpg" },
    { id: 11, name: "Zip-Up Suede Boots", price: "₹1,899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/58/12/a4/5812a44085661a384b794d4aac8eea77.jpg" },
    { id: 12, name: "Fur Trimmed Mid Boots", price: "₹2,299", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/12/af/85/12af85f1acb498ed3cb38c0ad6b208c4.jpg" },
    { id: 13, name: "Waterproof Snow Boots", price: "₹2,599", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/68/9a/73/689a73149fdfa9493d3a9bfffb41fa37.jpg" },
    { id: 14, name: "Platform Ankle Boots", price: "₹2,499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/e7/1c/b0/e71cb0ed7fc790b2fff35cf90d915405.jpg" },
    { id: 15, name: "Wool Lined Leather Boots", price: "₹2,899", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/b7/69/b5/b769b5a4cd232cb23ca57679c8ce05d9.jpg" },
    { id: 16, name: "Slip-On Winter Boots", price: "₹1,499", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/4b/a1/84/4ba18499bc02be583539bbfd537682fd.jpg" },
    { id: 17, name: "Faux Leather Long Boots", price: "₹2,699", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/67/40/4c/67404c2820a4683132534b5e817cd507.jpg" },
    { id: 18, name: "Snowproof Ankle Boots", price: "₹2,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/9e/a7/b4/9ea7b4933da8055f45d856956a641b18.jpg" },
    { id: 19, name: "Zipper Fur Boots", price: "₹1,999", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/40/03/8b/40038b4485ba082073734a2fedfb8114.jpg" },
    { id: 20, name: "Stylish Combat Boots", price: "₹2,299", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/73/f1/4e/73f14e8fde3100ee92efd57c10b76463.jpg" },
    { id: 21, name: "Leather Riding Boots", price: "₹3,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/ac/27/04/ac2704f56b354ad9bf376b545c7cf366.jpg" },
    { id: 22, name: "Flat Snow Boots", price: "₹1,799", rating: "⭐⭐⭐", image: "https://i.pinimg.com/736x/fc/b3/d4/fcb3d44514923723ef6b76a18f5729ec.jpg" },
    { id: 23, name: "Heeled Winter Boots", price: "₹2,399", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/9f/a6/82/9fa682d308d5d1b582aac14d87ed26c8.jpg" },
    { id: 24, name: "Suede Block Heel Boots", price: "₹2,199", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/e3/98/ab/e398abaeaed953ba9439e0fc4ba8033b.jpg" },
    { id: 25, name: "Quilted Leather Boots", price: "₹2,799", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/0d/32/7c/0d327ce0d1e2507d9bde0877bcaae550.jpg" },
    { id: 26, name: "Mid Calf Fur Boots", price: "₹2,499", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/31/cc/17/31cc1741a764610474ee710149bc3bfb.jpg" },
    { id: 27, name: "Ankle Grip Snow Boots", price: "₹1,999", rating: "⭐⭐⭐", image: "https://i.pinimg.com/1200x/d5/21/3d/d5213d803ce462f59a122984cd9150e2.jpg" },
    { id: 28, name: "Shearling Winter Boots", price: "₹2,599", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/b7/69/b5/b769b5a4cd232cb23ca57679c8ce05d9.jpg" },
    { id: 29, name: "Side Zip Leather Boots", price: "₹2,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/00/f7/c5/00f7c51ae4c1b7ab0e0dfe09e637f781.jpg" },
    { id: 30, name: "Chunky Combat Boots", price: "₹1,899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/2b/dd/eb/2bddeb8a51a4f4e2ecf47654e5e6d1f3.jpg" },
    { id: 31, name: "Classic Fur Lined Boots", price: "₹2,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/51/11/c7/5111c757ac797b2ef227652050291938.jpg" },
    { id: 32, name: "Wedge Heel Boots", price: "₹2,199", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/08/57/86/085786d7215da2c308222f58b32be399.jpg" },
    { id: 33, name: "Buckle Strap Boots", price: "₹1,899", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/45/93/20/45932067e0374d7e45f44d3de0cadb6f.jpg" },
    { id: 34, name: "Thermal Snow Boots", price: "₹2,299", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/d1/07/27/d107271f751b3256b804d3bcc5b5d704.jpg" },
    { id: 35, name: "Classic Ugg Style Boots", price: "₹1,999", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/86/b6/bd/86b6bd4724a1b60528f266c67e290823.jpg" },
    { id: 36, name: "Heeled Fur Trim Boots", price: "₹2,699", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/d4/64/c3/d464c3c0532178528cfa16389d823555.jpg" },
    { id: 37, name: "Leather Lace-Up Boots", price: "₹2,399", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/1a/34/83/1a34837d6b92b8f1632b6220c1cfcea7.jpg" },
    { id: 38, name: "Winter Trail Boots", price: "₹2,099", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/1200x/0f/c7/0e/0fc70e793286f12d599eef5c414531b1.jpg" },
    { id: 39, name: "Warm Plush Boots", price: "₹1,799", rating: "⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/42/fc/bc/42fcbc5e4ef2c677ce661694fae44eee.jpg" },
    { id: 40, name: "Elegant Suede Boots", price: "₹2,499", rating: "⭐⭐⭐⭐⭐", image: "https://i.pinimg.com/736x/78/f5/e8/78f5e841c19d708c832f5d0f32a0b6ae.jpg" }
  ];

  const sareeProducts = [
    {
      id: 201,
      image: "https://i.pinimg.com/1200x/69/35/cb/6935cb426988de0da2263194c0ad62e9.jpg",
      name: "Pink Banarasi Silk Saree",
      price: "₹2499",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 202,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-Wdzy6TjG_Vs1v2okAG3r_pRgWKQc8aAjkxarn_TpOaFQztT-5EF9XW75wHhjY0yH8KI9ePAwbTFVtYk-XQgvVUeZfN1yl_P248v87Xw-OX3Yliq_IKSxew",
      name: "Red Kanjivaram Saree",
      price: "₹3199",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 203,
      image: "https://i.pinimg.com/736x/5f/8d/47/5f8d47e6e1e9647a01b32d749b02f3a7.jpg",
      name: "Blue Georgette Saree",
      price: "₹1899",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 204,
      image: "https://i.pinimg.com/736x/32/90/32/32903224f89291d98e36a52075e751cf.jpg",
      name: "Golden Partywear Saree",
      price: "₹2899",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 205,
      image: "https://i.pinimg.com/736x/ee/ea/f6/eeeaf6a775f5db42b1a6fd631c84fdb7.jpg",
      name: "Cream Organza Saree",
      price: "₹2599",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 206,
      image: "https://i.pinimg.com/736x/1d/e2/1a/1de21a5f870cca4557180b8b080709c3.jpg",
      name: "Green Floral Print Saree",
      price: "₹1799",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 207,
      image: "https://i.pinimg.com/1200x/19/d6/99/19d699b37d3ea22af268a0f564417584.jpg",
      name: "Maroon Velvet Saree",
      price: "₹2999",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 208,
      image: "https://i.pinimg.com/736x/06/65/c6/0665c63337d3f75943a7cace896ac872.jpg",
      name: "Peach Satin Saree",
      price: "₹2399",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 209,
      image: "https://i.pinimg.com/1200x/b7/8a/31/b78a31a7f005f6de52c8906b2af911f5.jpg",
      name: "Royal Blue Chiffon Saree",
      price: "₹1599",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 210,
      image: "https://i.pinimg.com/736x/c2/c9/39/c2c9393edeca6c7d194b9c49f2ccabf6.jpg",
      name: "Black Sequin Party Saree",
      price: "₹2699",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 211,
      image: "https://i.pinimg.com/736x/03/b5/20/03b52052a9132f2c802d2a326b65366f.jpg",
      name: "Sky Blue Linen Saree",
      price: "₹1699",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 212,
      image: "https://i.pinimg.com/1200x/69/fa/17/69fa174b5f573b795be3012b62e42f0f.jpg",
      name: "Lavender Embroidered..",
      price: "₹2599",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 213,
      image: "https://i.pinimg.com/1200x/82/ab/c5/82abc50e4146e11c0a7e3c85c002f4cc.jpg",
      name: "Yellow Silk Saree",
      price: "₹2299",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 214,
      image: "https://i.pinimg.com/736x/c6/d5/5e/c6d55ef4a67ac84b2ef2e67ad92557cb.jpg",
      name: "Rose Gold Saree",
      price: "₹2799",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 215,
      image: "https://i.pinimg.com/736x/66/ef/3c/66ef3c8cac329cd03cf213e64471117c.jpg",
      name: "Orange Cotton Saree",
      price: "₹1499",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 216,
      image: "https://i.pinimg.com/1200x/cf/8e/53/cf8e53837715870525354a47a30d39b9.jpg",
      name: "Cream Gold Banarasi...",
      price: "₹3199",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 217,
      image: "https://i.pinimg.com/736x/15/f8/1b/15f81b228a521132d10ff53c497b74a6.jpg",
      name: "Navy Blue Saree",
      price: "₹2799",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 218,
      image: "https://i.pinimg.com/736x/f6/ff/b2/f6ffb2178687dc8824d15b24c948ec34.jpg",
      name: "Partywear Georgette Saree",
      price: "₹1999",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 219,
      image: "https://i.pinimg.com/1200x/17/5d/a9/175da9a9bd9e3819ac2e8f6bce6a9bc6.jpg",
      name: "Pastel Pink Net Saree",
      price: "₹1899",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 220,
      image: "https://i.pinimg.com/1200x/52/08/42/5208427f4f5b83980aef928d227f765a.jpg",
      name: "Olive Green Saree",
      price: "₹2399",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 221,
      image: "https://i.pinimg.com/736x/d1/85/d4/d185d4a5b59666981bd972a34ec6bee3.jpg",
      name: "Golden Tissue Saree",
      price: "₹2599",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 222,
      image: "https://i.pinimg.com/1200x/0a/1c/67/0a1c672e2a2468896f05195352e45d82.jpg",
      name: "Sea Green Silk Saree",
      price: "₹2999",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 223,
      image: "https://i.pinimg.com/1200x/e8/6d/19/e86d19ce4c42c220bba4ffd486c80ed7.jpg",
      name: "Light Pink Printed Saree",
      price: "₹1599",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 224,
      image: "https://i.pinimg.com/736x/d1/6b/8d/d16b8ddf7c704df119983e0135e0fa9b.jpg",
      name: "Purple Net Saree",
      price: "₹2799",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 225,
      image: "https://i.pinimg.com/736x/5d/a8/c1/5da8c1ce318704c7267a4739bf372b93.jpg",
      name: "Beige Embellished Saree",
      price: "₹2699",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 226,
      image: "https://i.pinimg.com/736x/d1/2f/d8/d12fd8bf8134758c193df1966eeb9499.jpg",
      name: "Baby Blue Printed Saree",
      price: "₹1799",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 227,
      image: "https://i.pinimg.com/1200x/2c/61/2a/2c612a0bf0016c9499b58346f68c8cf0.jpg",
      name: "Maroon Cotton Saree",
      price: "₹1499",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 228,
      image: "https://i.pinimg.com/736x/7a/c6/69/7ac669389ba0f586b53a47ef06a78485.jpg",
      name: "Pink Banarasi Saree",
      price: "₹3099",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 229,
      image: "https://i.pinimg.com/1200x/a7/39/c6/a739c6ad216a1d420f5ac7248a0a6da3.jpg",
      name: "Yellow Organza Saree",
      price: "₹1999",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 230,
      image: "https://i.pinimg.com/736x/8d/4d/c8/8d4dc8564c31fa20bd204df27dc73b0b.jpg",
      name: "Teal Blue Saree",
      price: "₹2899",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 231,
      image: "https://i.pinimg.com/736x/c8/d9/c2/c8d9c2ab8bc9e785b0886ff549218304.jpg",
      name: "Coral Red Chiffon Saree",
      price: "₹1699",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 232,
      image: "https://i.pinimg.com/736x/91/d0/aa/91d0aa682b78b54982bbf59c0c088288.jpg",
      name: "Silver Grey net Saree",
      price: "₹2799",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 233,
      image: "https://i.pinimg.com/1200x/b8/98/27/b898272cf7f5cb3bb50960e56877e84b.jpg",
      name: "Royal Blue Cotton Saree",
      price: "₹1499",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 234,
      image: "https://i.pinimg.com/1200x/e1/76/70/e17670154f5d001e02434e30818a5cd7.jpg",
      name: "Orange Silk Blend Saree",
      price: "₹2399",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 235,
      image: "https://i.pinimg.com/736x/85/90/b8/8590b8552edcc36156cc12cd95bd4117.jpg",
      name: "Ivory Gold Border Saree",
      price: "₹2599",
      rating: "⭐⭐⭐⭐",
    },
    {
      id: 236,
      image: "https://i.pinimg.com/1200x/2a/2e/1a/2a2e1a4b570fbb9a6800e5397fe66fbb.jpg",
      name: "Wine Velvet Saree",
      price: "₹2999",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 237,
      image: "https://i.pinimg.com/1200x/46/8a/a7/468aa7cb0438793c409ab759ede0861a.jpg",
      name: "Floral Print Saree",
      price: "₹1899",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 238,
      image: "https://i.pinimg.com/736x/74/f6/64/74f664cf621edc941690e9a9ad1a23b6.jpg",
      name: "Beige Handloom Saree",
      price: "₹1699",
      rating: "⭐⭐⭐✨",
    },
    {
      id: 239,
      image: "https://i.pinimg.com/736x/07/ab/90/07ab90f3852463ed2d3f6fe7edc0263d.jpg",
      name: "Fuchsia Pink Saree",
      price: "₹2899",
      rating: "⭐⭐⭐⭐✨",
    },
    {
      id: 240,
      image: "https://i.pinimg.com/736x/59/a7/1a/59a71ad400959c8e1d2cc4804da5c058.jpg",
      name: "Cream Zari Border Saree",
      price: "₹2699",
      rating: "⭐⭐⭐⭐",
    }
  ];

  const giftProducts = [
    {
      id: 301,
      image: "https://i.pinimg.com/736x/38/e6/83/38e683bd7e7e460cb81060b660ed4e6c.jpg",
      name: "Golden Zari Embroidered Potli Bag",
      price: 899,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 302,
      image: "https://i.pinimg.com/1200x/9c/09/87/9c098739bc753b54bf4f322218428702.jpg",
      name: "Festive Decorative Diyas Set (Pack of 6)",
      price: 499,
      rating: "⭐⭐⭐⭐✨"
    },
    {
      id: 303,
      image: "https://i.pinimg.com/736x/60/00/da/6000da08cad766b6dda3b7a51a405d37.jpg",
      name: "Traditional Kundan Jewellery Gift Set",
      price: 1299,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 304,
      image: "https://i.pinimg.com/1200x/08/7f/fd/087ffde3c119f224d3e3b6efb0ba7caf.jpg",
      name: "Luxury Scented Candle Gift Box (3 pcs)",
      price: 799,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 305,
      image: "https://i.pinimg.com/1200x/4e/3a/a0/4e3aa0b09c090ee712969ae765eacdf5.jpg",
      name: "Handcrafted Marble Ganesh Idol",
      price: 1599,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 306,
      image: "https://i.pinimg.com/736x/f8/fa/6a/f8fa6a92169dd56f9de0a8e54a98f5cf.jpg",
      name: "Decorative Diwali Lights String (20 LEDs)",
      price: 699,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 307,
      image: "https://i.pinimg.com/736x/ef/08/99/ef08999d0a9f130624ba5e9fab1caa4b.jpg",
      name: "Traditional Dry Fruits Gift Box",
      price: 1199,
      rating: "⭐⭐⭐⭐✨"
    },
    {
      id: 308,
      image: "https://i.pinimg.com/736x/31/9a/b6/319ab6b99fe9795b07a7d184a4d12896.jpg",
      name: "Rose Scented Wax Diyas Pack",
      price: 599,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 309,
      image: "https://i.pinimg.com/736x/43/a9/c2/43a9c2c94659b53e297f6e72b1602e68.jpg",
      name: "Brass Lakshmi Ganesh Puja Idol Set",
      price: 1799,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 310,
      image: "https://i.pinimg.com/1200x/d6/8c/f2/d68cf2ab20ee08e58890c1dab014c584.jpg",
      name: "Decorative Rangoli Tealight Holder",
      price: 449,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 311,
      image: "https://i.pinimg.com/1200x/0e/23/b8/0e23b84d6824fb613ec1a56f1ffbb0ef.jpg",
      name: "Festive Chocolate Hamper Box",
      price: 999,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 312,
      img: "https://i.pinimg.com/1200x/41/63/c3/4163c39f610e3c050eecb1f577069bf5.jpg",
      name: "Floral Metal Wall Hanging Diya Holder",
      price: 1399,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 313,
      image: "https://i.pinimg.com/736x/f6/14/7f/f6147f20f0942d89be1c31d732fe0e1d.jpg",
      name: "Ethnic Mirror Work Cushion Covers (Set of 4)",
      price: 899,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 314,
      image: "https://i.pinimg.com/736x/08/43/08/084308ff4a7c97a925621cf002050434.jpg",
      name: "Sandalwood Fragrance Candle Set",
      price: 649,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 315,
      image: "https://i.pinimg.com/1200x/01/92/54/019254e3246d29a02c71fe637ea41443.jpg",
      name: "Handcrafted Wooden Jewelry Box",
      price: 1099,
      rating: "⭐⭐⭐⭐✨"
    },
    {
      id: 316,
      image: "https://i.pinimg.com/1200x/da/56/58/da5658e3fba7a4031cfd119b29036500.jpg",
      name: "Gold Plated Peacock Earrings Set",
      price: 899,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 317,
      image: "https://i.pinimg.com/1200x/fd/e0/a4/fde0a4bbbed897e17c19146235ccb030.jpg",
      name: "Decorative Toran Door Hanging",
      price: 599,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 318,
      image: "https://i.pinimg.com/1200x/ce/cd/1d/cecd1d75cba2456dc917493c4bddc035.jpg",
      name: "Kundan Rakhi with Gift Box",
      price: 499,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 319,
      image: "https://i.pinimg.com/1200x/fa/b9/e5/fab9e509c37ae68659e389cc78aea59b.jpg",
      name: "Festive Copper Bottle Gift Set",
      price: 1599,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 320,
      img: "https://i.pinimg.com/1200x/43/56/80/43568042db43265e60814d766356c37a.jpg",
      name: "Designer Candle Holder with Crystals",
      price: 999,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 321,
      image: "https://i.pinimg.com/736x/9d/62/46/9d624679d6112105256d1cfd751c59ae.jpg",
      name: "Decorative Lotus Metal Tea Light Set",
      price: 849,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 322,
      image: "https://i.pinimg.com/736x/5f/32/c8/5f32c843ddf15c68ac81a2497a9131e7.jpg",
      name: "Golden Metal Pooja Thali Set",
      price: 1399,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 323,
      image: "https://i.pinimg.com/1200x/bc/a7/73/bca773bec6be945b47d1ae50559d3b26.jpg",
      name: "Ethnic Jute Potli Bag Combo",
      price: 749,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 324,
      image: "https://i.pinimg.com/736x/c6/ec/0f/c6ec0f80ed37c86f3d24a751213aac63.jpg",
      name: "Festive Sweets Box Gift Pack",
      price: 1199,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 325,
      image: "https://i.pinimg.com/736x/9f/11/4f/9f114f309bbb3c7a38308aeb70513846.jpg",
      name: "Diwali Decor Fairy Light Jar",
      price: 599,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 326,
      image: "https://i.pinimg.com/1200x/47/b1/8f/47b18fde2e20acb90e2f05ab24bbbbb9.jpg",
      name: "Elegant Crystal Showpiece Gifting Item",
      price: 899,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 327,
      image: "https://i.pinimg.com/1200x/ce/f0/b6/cef0b69d6d0e5e17e7307cbccac8c657.jpg",
      name: "Miniature Ganesha Idol Gift Box",
      price: 699,
      rating: "⭐⭐⭐⭐✨"
    },
    {
      id: 328,
      image: "https://i.pinimg.com/1200x/c6/4a/73/c64a731094a501f01f3d20600fa444a0.jpg",
      name: "Ethnic Dupatta Gift Wrap",
      price: 999,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 329,
      image: "https://i.pinimg.com/736x/09/ab/aa/09abaacdf8c39aaa8bce69324324729a.jpg",
      name: "Brass Peacock Diya Stand",
      price: 1299,
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      id: 330,
      image: "https://i.pinimg.com/1200x/a8/3a/0c/a83a0c742581fe6f8ee81b1948845fc8.jpg",
      name: "Handcrafted Wooden temple",
      price: 1499,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 331,
      image: "https://i.pinimg.com/1200x/68/ec/79/68ec799c97505cd2bc4003035002f6e9.jpg",
      name: "Designer Aroma Diffuser Lamp",
      price: 999,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 332,
      image: "https://i.pinimg.com/1200x/82/0a/e8/820ae873a1765d3ca27ddce1e9bc5173.jpg",
      name: "Premium Dry Fruit Jar Set",
      price: 1299,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 333,
      image: "https://i.pinimg.com/736x/bc/e9/3b/bce93b520ef575541d823b233a5d991d.jpg",
      name: "Luxury Handcrafted Candle Holders",
      price: 899,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 334,
      image: "https://i.pinimg.com/1200x/7c/a6/b6/7ca6b61dca78e67a4daa1f58fd0576cc.jpg",
      name: "Ethnic Beaded Coaster Gift Set",
      price: 599,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 335,
      image: "https://i.pinimg.com/1200x/2b/e7/d4/2be7d4a05a5c6b611d21a0c51f81f82c.jpg",
      name: "Classic Photo Frame Gift Box",
      price: 899,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 336,
      image: "https://i.pinimg.com/1200x/6b/47/31/6b4731bb900cdff9c228642a61f75ce0.jpg",
      name: "Handmade Clay Decorative Diyas",
      price: 499,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 337,
      image: "https://i.pinimg.com/1200x/34/5a/11/345a11d23666dd08e67772b2698abe15.jpg",
      name: "Gilded Flower Candle Bowl Gift",
      price: 699,
      rating: "⭐⭐⭐✨"
    },
    {
      id: 338,
      image: "https://i.pinimg.com/736x/68/7e/5d/687e5da5923784b2bc5a4bb403e9a687.jpg",
      name: "Festive Essential Oil Gift Box",
      price: 1299,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 339,
      image: "https://i.pinimg.com/1200x/a5/df/1f/a5df1f795dae7977dc0fa9e7023cff62.jpg",
      name: "Decorative Gifting Lantern with Candle",
      price: 1099,
      rating: "⭐⭐⭐⭐"
    },
    {
      id: 340,
      image: "https://i.pinimg.com/736x/ec/9b/ee/ec9bee76f0a7b774a613e266abf0176f.jpg",
      name: "Luxury Chocolate Gift Hamper Box",
      price: 1399,
      rating: "⭐⭐⭐⭐⭐"
    }
  ];



  let allproducts = [...products, ...shopProducts, ...makeupproducts, ...shampooProduct, ...skinProducts, ...winterProducts, ...jewelleryProducts, ...winterBootsProducts, ...sareeProducts, ...giftProducts];
  let product = null;
  allproducts.forEach(function (e) {
    if (e.id === productid) {
      product = e;

    }
  })
  if (product) {
    document.querySelector("#prod-img").src = product.image;
    document.querySelector(".prod-name").textContent = product.name;
    document.querySelector(".prod-price").textContent = product.price;
    document.querySelector(".prod-rating").textContent = product.rating;

  } else {
    document.querySelector(".product-container").textContent = "product not found";
  }
  let checkoutForm = document.querySelector("#checkout-form")
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (product) {
      window.location.href = "success.html";

    } else {
      alert("Product not found");
    }
  })

})





