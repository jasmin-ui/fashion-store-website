function categoryProduct() {
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
    { id: 181, name: "Herbal Anti-Dandruff Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzFJKyk3CC5jhwrALwz69PcNo-gp_CiZtMNHXbCbMp0jotW07KhDIgKvt8742E4qVoJsNze450hWBiDGKDqGLJik5ycKIboKCzbxQSIGi7MxPYeGSyVfEf", category: "shampoo" },
    { id: 182, name: "Keratin Smooth Shampoo", price: "₹349", rating: "⭐⭐⭐⭐⭐", img: "https://m.media-amazon.com/images/I/51OraU3yvFL.jpg", category: "shampoo" },
    { id: 183, name: "Onion Hair Fall Control Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRbX8qoLSTWB9tXWRrr1e_VPs0DIcX1svOVYRoj-9tVY2P6LajtQNzIx1jSf620242Yoenb3QO8UxqHjXUmGeU7PUuX2nRqSzU9zGr1E9w3gUUHwYKwamds", category: "shampoo" },
    { id: 184, name: "Aloe Vera Gentle Shampoo", price: "₹279", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ228BkfIDYTQNA62Xbn5NGyP0DZeBBlk3sa-wxmNygl5PMZsrYtIA2f8ZVwkPcQ5jutcDLHtqYlGriQG9s7wwSIsFHOk35-f_TbtnleszUT3jnbt_7Wb1NHQ", category: "shampoo" },
    { id: 185, name: "Coconut Nourishing Shampoo", price: "₹900", rating: "⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8dQz1km0rVMEFPgRVa30YQZgNWymeJW_Fv53ro4R2W5PquBZHV-2f92VRzbUv7Uj4zaBzvgm2VaYsVTljRX7mtC2dv-ciSKAfca-t8jkZVEaGRNnlArFDCQ", category: "shampoo" },
    { id: 186, name: "Ayurvedic Bhringraj Shampoo", price: "₹359", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFAGqx5VVsFP2HMlAq9mGfhE1Fmb_soUBItDx8rRbXKlfixIwzOKJQHlj3cSs9DIfn0Lwqiqm3dCdDKrWQGOYuyNLR7dGCZfEkin4I99nJJhh1HD2Wb8eBdQ", category: "shampoo" },
    { id: 187, name: "Tea Tree Refreshing Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwJLBBSsDT0uSW1CtvOkmkYyecZi8MhWn7ihhibq52bCHhabbpsNDU8oJMwxomBXBWY0b6theETTmpy0Tc7fAHiYETwzvFVbB9DPhVoTCw-mkDUDPlDXyH", category: "shampoo" },
    { id: 188, name: "Charcoal Deep Clean Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScQgHbDhcFBDuC8Ez9t-I4ZTypl19mhRwLiqGYWFoZxj6Rls7MX1WnoU0BNLrSvKV7CkgH-QpdO-mVjXr4FLrJX9UnI8UF4Zz0-5I7-n81zvK1k3-heivixw", category: "shampoo" },
    { id: 189, name: "Biotin Thickening Shampoo", price: "₹499", rating: "⭐⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwkztLJHK6Z5Cwlj3HEc89yK97Dtvj6nytzDwzFVvbQbX4gDDMLPmswq_fcg9OaD0eNVMhYmuDFzPp-Dht0R0jYUm1USrtOTPiNnWv06FACD5HC_GZ3wIB", category: "shampoo" },
    { id: 190, name: "Argan Oil Hydrating Shampoo", price: "₹900", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR8g2QNRI3Gg7c-GBGoO9fCIbWcCZ3SjhcIVl2PcRD1vTkoSmvtOcRxPgDCmih3bDcGsf3XfjsVwA3Jj_AglH3Z1lklXBezhk0SRLTPTydybPRyqczWnA4y2g", category: "shampoo" },

    { id: 191, name: "Volumizing Herbal Shampoo", price: "₹800", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRC2mEyTXMiOnM-UJ0gx3IhaZbWAji4eizzhrTV2pHhaP4orMXGd1YwYWJo1NQPtvjTt4YR6RRSrgukHGoRffonPGkAehd9sFLK1J_wA5R8Ecxv8YYXANMvVA", category: "shampoo" },
    { id: 192, name: "Damage Repair Protein Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSf7FzA2RJHZLvl7JNnx1YeYTpFYXYexzO-21-OrdGFNuQ-WSHsinR7KCFBczb8brgIkPFvsLzdPU8XcQGmi6uuoQor0_EOvGF4e7M-FsRzCSftjhP792IS", category: "shampoo" },
    { id: 193, name: "Silky Smooth Care Shampoo", price: "₹349", rating: "⭐⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRB6QdoAOK4YZSQQRrSTA8-swzOkwm_YLM8f3jEO0I7oy9tAvEpkUhzEinxWHQludopl1jMu6MMisIWPVkn6pTQOSjzMXromv0nVkDETjECA9CDQtp_pD0R", category: "shampoo" },
    { id: 194, name: "Rosemary strengthing Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR69qxzNPhJfnFgFE5T-s4cPLw3rXsL1Rtv9lSxP0XEOiX8dD64poiorMcnTBndFi5dpFwIeO1dlUlrqxLygstlW4I92cZsili9_B976yTJc9fjMA787luJ0Q", category: "shampoo" },
    { id: 195, name: "Lemon Anti-Oil Shampoo", price: "₹299", rating: "⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQT7Cod9VtrGqGU-UEOmuLUzm9UdPF1kS24nLq9_hn9hOHx9yCKnHLSPBC92R7J44LtBF84ZCcByxVjyTP1ciTxlgnGjYqARMmyoS9yNTSZ16OIIwGhlaFmOr4", category: "shampoo" },
    { id: 196, name: "Mint Cooling Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQt1n-Gwyu0ykoZJdu6AoQZgdGckdR4IPKhKGkJBoDfBUoM_i3axBbjqFHRp3clACA8ZZa-QKwtegbE5ud0KD6CvbJS8KkeESoPSX_Sd970tld_wL2AHQ04", category: "shampoo" },
    { id: 197, name: "Charcoal Detox Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvEPiVyrVeTyzLgNu8uhZs6B9-YkgSzHuNOdy9m8beSvFb0EVM55hP6dR40G5xRSad2HUEeq25FDemFvJ2u0DiuF8SyJSe7nOHlDXX7hmjIYbAtTfOBc2r", category: "shampoo" },
    { id: 198, name: "Onion & Black Seed Shampoo", price: "₹459", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdYWom5ErUC-aK0NS84We_biyPxbQOHeKiTAPjW1OsZsGoVpUmY15PuzBSmK--xnd_GWm5U3RDZ-LtsWqHz9t6dJewnyon277uFOroemMrJHJyyKRsA50F", category: "shampoo" },
    { id: 199, name: "Hibiscus Natural Shine Shampoo", price: "₹500", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwLY2BvfuNPWU2xc4H3aAgVUC0uQ45rAo79xAOXiGybq_v42eVlGHxQl_EFBjGG82x45QcywBQiMdGkWa8nLqldZ-6-ozz86mKCH7P8WUt5JN36n4ffaPuEA", category: "shampoo" },
    { id: 200, name: "Green Tea Anti-Hairfall Shampoo", price: "₹600", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQg6x4kjZ9Kw4Kx-4nBJwP8OvVsPJoJT506bk_2RxOQVL2E0RHEuCGgrint2pLCph4WwiY1f58XErsVBAZ690UrLWAe_kAO3AH4bEaJWMEDZgrDXcxrNOBkQs0", category: "shampoo" },

    { id: 251, name: "Coffee Infused Hair Shampoo", price: "₹499", rating: "⭐⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgeKqmXOyX5cRP0N4kT-_MjQR2k0cz2VpodVj-Xj9TDQKRHZFl4qJZgsq5FX0E7pA1hACUnfnhLsoNbN1JQJSkqdTpOo5HFs4koaUp84GFHAwi6EA_6uDB", category: "shampoo" },
    { id: 252, name: "Amla & Shikakai Herbal Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQemzyKAt4UnRZV6cVK_VB77q099Z87OMdt-MOnr8bMMhdEtMGmuxUyhTX6qf1TtX_kdvt4qFEhAT0XzQ3eanrqCfULU1TPDN3m2O8e3rKGTcg8F0ceTlu2d_Vjktl9qP_O_BWZqA&usqp=CAc", category: "shampoo" },
    { id: 253, name: "Keratin & Collagen Shampoo", price: "₹549", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBluFpon_slxlhzh6HjpKPZa8nBT_dCdoazggCj4h6yvE-IuVHIM0qYgOedc0HhgwRpw-pnwlbkHkDZH1hU5LL27rB3UpBwFWEZvczje-4BXkEMb5AVDxp1g", category: "shampoo" },
    { id: 254, name: "Protein Strengthening Shampoo", price: "₹449", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnY6NrsQqN49uzQ1vchFizIE3zFR6WhNA0qfc34WFBjmG5tRaEsYcpWbU_9cc2ArLg207lpjZ3E7AfGbbURuzp8BUm4YPzD8vIJ6ZIbgTVfJI7zhgY7rLYSA", category: "shampoo" },
    { id: 255, name: "Natural Reetha Shampoo", price: "₹329", rating: "⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST3iTKS4EA4DaRlt0SK9y44HKUR9M_Hr5eeqigzVTVULNLCXJyAIjSk40fAY8VshchiAbrOvbj1Ysf8aYN5IJBWIJLvTrz1zgaeEjXky4Nf40qkH2OnQ_R", category: "shampoo" },
    { id: 256, name: "Soya Protein Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScHiP9Eyo5gPG6Y6Zeu68jrHuws8dTjv8USCDw5rk8iE_dZLqjMeiarHbfsCnli_h_xUZKenF0kr5Orp60eCHlycx6v0R-0SFDVtp5o6KRD8rs6_J2psxLNQ", category: "shampoo" },
    { id: 257, name: "Moisture Lock Shampoo", price: "₹499", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQF3AIDL80kt-lhjgx_nJJjg333TdNaSFgPya7lGDTldHDvw0qifIqtUfd-sfv4aHV2ubt6LCJKMGKxbix6MBnMrpU3MP_TTjSXFRycNvZ2aVgTjdbXQPFF", category: "shampoo" },
    { id: 258, name: "Vitamin E Nourishing Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRy-xDe_gb-KHv6AioJO56xVbTj7zGnhBbX9dcatwydP34r0MODON0IIb4ODpxKHuV0bEQ5lQja91TBurpFq52ra8tr0l9eB_iw4LFW3l2BS5xaovl2slXKTg", category: "shampoo" },
    { id: 259, name: "Keratin Complex Shampoo", price: "₹549", rating: "⭐⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuZlHapUAKQ6eSitt5ErCxlBSlOQ4ky_kbQq0WSqLUhAPgQec89BBosE5n3qIc7J2wKW5GyMCuXLEMBR6S2TSKDgKvofKut1Nvl0sROx-5ecghQeejL1gB", category: "shampoo" },
    { id: 260, name: "Olive Oil Care Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTHx5ymcxzuEg_kUJYBWadH4mzMzqwPkiB6G116I1D95EaPIeOD37TfnSGPT2O88YCnFM5XoGQCgyZZYESTMHTGtGW-U49N7xtTabnCsG67Afcly9aFbRXHNQ", category: "shampoo" },

    { id: 261, name: "Anti-Frizz Smooth Shampoo", price: "₹999", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIfz0Xn9Eu3gqnYSg5YMJQiu6j-NWyytYl3qDojqvjvypE1dBmZq_2irU4wuG3EMlsDymUg6OKTdLjCKyjJuMqGuU-Hkb0jpS5jPEQXgD2NtJOYmJYN0pS", category: "shampoo" },
    { id: 262, name: "Charcoal & Clay Purifying Shampoo", price: "₹479", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTEe0GzqtkOSlARlO5F_qSiHbXojt1Zkek9rzWI8k82Age0GDJJegjin5-qStAndDWJFIOgvxKvUazw1JGAl1cJ_JNoF0qIM4TnntkGJUBg7q66rrX5cigkUw", category: "shampoo" },
    { id: 263, name: "Aloe & Coconut Hydration Shampoo", price: "₹399", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGHfH2xr-gnRP9JSLza1tCcGr7Rq7q3OPyf8dQoX-_M5VGjpEJ117FP30avZ9fdH0rIV0fqtZ8W4QqPg5yFTfdnD0W1yD8vOeQb6e8w_KX0UfjussLR-Lf", category: "shampoo" },
    { id: 264, name: "Neem & Tulsi Herbal Shampoo", price: "₹299", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNMTpI5XD1FO1Ys1zb-o8Gzb5YZrqjx6iqPDlqxEab45FqSd7aUFnDylYOiTZIIiyIdmL6XoPLYWwMkNfyjp-yTGSTszPKQmrigS3FRB-urUFQXN0SsuVCgw", category: "shampoo" },
    { id: 265, name: "Red Onion Damage Repair Shampoo", price: "₹459", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNtTpcxTHVxU7LVelgNKiXxLxfuJG6XowrtkJxVrDkAiFEDA2ZqN1hQLrSWtMFdR_NaYGH04EwPOvEYF-v2kxq1xUwMyxmvlfRLSOY5BAgx9XuDSKrCjpS", category: "shampoo" },
    { id: 266, name: "Argan & Shea Butter Shampoo", price: "₹549", rating: "⭐⭐⭐⭐⭐", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRH2hMFiPnUsKO4gwfBRckn_2gUuTlvYjgdljMO18LH_87nP-6WzJdDJMxBIBVs-uNxeBJMFJwLatxlP8DozviE0NIx2Fol0hezUnXgD9ncMyxkLZs30p9d", category: "shampoo" },
    { id: 267, name: "Keratin Therapy Shampoo", price: "₹599", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoXjS9wuWBjt-5_6ksfHY-dwb64RiZyUwqRMPb3OmKYfVs8XcXPv6acdm_62-zU-IGJgkOHG4pNtDsU2fE-QaAuYkoS1-YUOav-h0mqpefsu6QtIIrGl3N", category: "shampoo" },
    { id: 268, name: "Biotin Hair Growth Shampoo", price: "₹499", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRk4sRPBV1O1U4oaVj5XiYEcblmAYOHrDOC8oMIrDWlEvUGE45tCx8aIOe27VNgGy321C_ltPuMylzgyUQVXOqxV4b7DLIaImpX3qZ0npuPuy4TcSL_xwzU", category: "shampoo" },
    { id: 269, name: "Oats Gentle Care Shampoo", price: "₹379", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCXSfiOexjO7VJoJZdQCFgKkAIAPXxlJyDhcWr3ngVGzHazHaHQVt_fiPbmpur3vclRcZ4y6y2t8ZkzkSWJP5AwIekEvjK1M2XZS4PmFKKDbseMs_CkQZ1zQ", category: "shampoo" },
    { id: 270, name: "Charcoal Volumizing Shampoo", price: "₹429", rating: "⭐⭐⭐⭐", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT9aGtL1fM8HdgCBCkjo5FELuM4rEEpem9yzvsaqmmZKNwByOqqCncRIEhm7iIaZ3IBFPCQ0Yi951_doawc9ORuC5VPs4GWyPDXHDyd9odRnXPYTE2lg8i9", category: "shampoo" }
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

  let urlParams1 = new URLSearchParams(window.location.search);
  let categoryid = parseInt(urlParams1.get("id"));

  if (categoryid === 9) {
    let hero = document.createElement("div");
    hero.className = "hero";
    let banner = document.createElement("img")
    banner.src = "https://cdnb.artstation.com/p/assets/images/images/065/517/255/large/farhat-zubair-received-995787728127073.jpg?1690553544"
    banner.className = "hero-img";
    let heading = document.createElement("h1")
    heading.textContent = "Top Makeup Products"


    hero.appendChild(banner);
    document.querySelector("main").prepend(heading);
    document.querySelector("main").prepend(hero);


    let list = document.querySelector(".category-list");

    function categoryProducts(f) {
      f.forEach(function (user) {

        let card = document.createElement("div");
        card.className = "category-card";

        let img = document.createElement("img");
        img.src = user.image;

        let name = document.createElement("h2");
        name.textContent = user.name;

        let price = document.createElement("p");
        price.textContent = user.price;

        let rating = document.createElement("span");
        rating.textContent = user.rating;

        let btn = document.createElement("button");
        btn.textContent = "Buy Now";
        btn.className = "Buy-Now";
        btn.dataset.id = user.id

        document.querySelectorAll(".Buy-Now").forEach(function (btn) {
          ;
          btn.addEventListener("click", function () {
            window.location.href = `payment.html?id=${btn.dataset.id}`;
          });
        });
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(btn);
        list.appendChild(card);
      })

    }
    categoryProducts(makeupproducts);

  } else if (categoryid === 10) {
    let hero = document.createElement("div");
    hero.className = "hero";
    let banner = document.createElement("img")
    banner.src = "https://www.khadinatural.com/cdn/shop/articles/banner_khadi01_1.jpg?v=1707974632&width=5760"
    banner.className = "hero-img";
    let heading = document.createElement("h1")
    heading.textContent = "Top Hair Care Products"


    hero.appendChild(banner);
    document.querySelector("main").prepend(heading);
    document.querySelector("main").prepend(hero);


    let list = document.querySelector(".category-list");

    function categoryProducts(f) {
      f.forEach(function (user) {

        let card = document.createElement("div");
        card.className = "category-card";

        let img = document.createElement("img");
        img.src = user.img;

        let name = document.createElement("h2");
        name.textContent = user.name;

        let price = document.createElement("p");
        price.textContent = user.price;

        let rating = document.createElement("span");
        rating.textContent = user.rating;

        let btn = document.createElement("button");
        btn.textContent = "Buy Now";
        btn.className = "Buy-Now";
        btn.dataset.id = user.id

        document.querySelectorAll(".Buy-Now").forEach(function (btn) {
          ;
          btn.addEventListener("click", function () {
            window.location.href = `payment.html?id=${btn.dataset.id}`;
          });
        });

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(rating);
        list.appendChild(card);
        card.appendChild(btn);
      })

    }
    categoryProducts(shampooProduct);



  } else if (categoryid === 11) {
    let hero = document.createElement("div");
    hero.className = "hero";
    let banner = document.createElement("img")
    banner.src = "https://lewisiawellness.com/wp-content/uploads/elementor/thumbs/Lewisia-Wellness-Banner-1600-x-500-px-qxrdmp2ndncxbmbqxg2octssjx5xbo4pkbkhe38jk0.png"
    banner.className = "hero-img";
    let heading = document.createElement("h1")
    heading.textContent = "Best Skin Care Products"


    hero.appendChild(banner);
    document.querySelector("main").prepend(heading);
    document.querySelector("main").prepend(hero);


    let list = document.querySelector(".category-list");

    function categoryProducts(f) {
      f.forEach(function (user) {

        let card = document.createElement("div");
        card.className = "category-card";

        let image = document.createElement("img");
        image.src = user.image;

        let name = document.createElement("h2");
        name.textContent = user.name;

        let price = document.createElement("p");
        price.textContent = user.price;

        let rating = document.createElement("span");
        rating.textContent = user.rating;

        let btn = document.createElement("button");
        btn.textContent = "Buy Now";
        btn.className = "Buy-Now";
        btn.dataset.id = user.id

        document.querySelectorAll(".Buy-Now").forEach(function (btn) {
          ;
          btn.addEventListener("click", function () {
            window.location.href = `payment.html?id=${btn.dataset.id}`;
          });
        });
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(rating);
        card.appendChild(btn);
        list.appendChild(card);
      })

    }
    categoryProducts(skinProducts);

  }

}

categoryProduct()




























































































