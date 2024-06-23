[
    {
        "name": "Claro",
        "image": "claro@3x.png",
        "rating": 4.5,
        "chef": "Ran Shmueli",
        "dishes": ["661f7980f31c1b7bef385c23", "661f7980f31c1b7bef385c24", "661f7980f31c1b7bef385c25"]
      },
      {
        "name": "Seafood Cove",
        "image": "https://example.com/seafood_cove.jpg",
        "rating": 4.2,
        "chef": "661f7980f31c1b7bef385c21",
        "dishes": ["661f7980f31c1b7bef385c26", "661f7980f31c1b7bef385c27"]
      },
      {
        "name": "Bella Italia Ristorante",
        "image": "https://example.com/bella_italia.jpg",
        "rating": 4.7,
        "chef": "661f7980f31c1b7bef385c22",
        "dishes": ["661f7980f31c1b7bef385c28", "661f7980f31c1b7bef385c29", "661f7980f31c1b7bef385c2a"]
      },
]




      // {
        //   $lookup: {
        //     from: "chefs",
        //     localField: "chef",
        //     foreignField: "_id",
        //     as: "chef",
        //   },
        // },
        // {
        //   $unwind: "$chef", // Unwind chef array created by lookup
        // },
        // {
        //   $lookup: {
        //     from: "dishes",
        //     localField: "dishes",
        //     foreignField: "_id",
        //     as: "dishes",
        //   },
        // },
