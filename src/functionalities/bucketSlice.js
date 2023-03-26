import { createSlice, nanoid, } from '@reduxjs/toolkit'

const initialState = {
  buckets: [
    {
      id: nanoid(),
      name: "Entertainment",
      cards: [
        {
          id: nanoid(),
          title: "Dog Show",
          link: "https://www.youtube.com/embed/4dPAqEoKOa0",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Education",
      cards: [
        {
          id: nanoid(),
          title: "Learn English",
          link: "https://www.youtube.com/embed/F-vLdvPjN-k",
        },
      ],
    },
    {
      id: nanoid(),
      name: "Traveling",
      cards: [
        {
          id: nanoid(),
          title: "Exploring Kerala",
          link: "https://www.youtube.com/embed/AkC90RMaQYs",
        },
        {
          id: nanoid(),
          title: "Natural Wonders",
          link: "https://www.youtube.com/embed/3SsK-cxlj_w",
        },
        {
          id: nanoid(),
          title: "Trucking",
          link: "link3",
        },
      ],
    },
    {
      name: "Film Songs",
      id: nanoid(),
      cards: [
        {
          id: nanoid(),
          title: "Song1",
          link: "https://www.youtube.com/embed/q0hyYWKXF0Q",
        },
        {
          id: nanoid(),
          title: "Song2",
          link: "https://www.youtube.com/embed/k73w-k9_e7g",
        },
      ],
    },
  ],
};

export const bucketSlice = createSlice({
    name: "buckets",
    initialState,
    reducers: {
        editBucketName: {
            reducer(state, action) {
                const { editedName, id } = action.payload
                const foundBucket = state.buckets.find(bucket => bucket.id === id)
                if (foundBucket) {
                    foundBucket.name = editedName
                }
            }
        },
        deleteBucket: {
            reducer(state, action) {
                const { index } = action.payload
                state.buckets.splice(index, 1);
            }
        },
        addBucket: {
            reducer(state, action) {
                state.buckets.unshift({
                    name: "new bucket",
                    id: nanoid(),
                    cards: [],
                    initialEdit: true,
                })
            }
        },
        addCard: {
            reducer(state, action) {
                const { bucketIndex, title, link } = action.payload;
                const newCard = {
                    id: nanoid(),
                    title,
                    link,
                }

                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                foundBucket.cards.unshift(newCard)
            }
        },
        updateCard: {
            reducer(state, action) {
                const { title, link, bucketIndex, cardIndex } = action.payload
                const foundBucket = state.buckets.find((bucket, index) => index === bucketIndex)
                const foundCard = foundBucket.cards[cardIndex]
                foundCard.title = title;
                foundCard.link = link;
            }
        },
        deleteCard: {
            reducer(state, action) {
                const { bucketIndex, cardIndex } = action.payload
                console.log(action.payload, "deelele");
                state.buckets[bucketIndex].cards.splice(cardIndex, 1);
            }
        },
        toggleInitialEditValue: {
            reducer(state, action) {
                const { index } = action.payload
                const val = state.buckets[index].initialEdit
                if (val !== undefined) {
                    state.buckets[index].initialEdit = false;
                }
            }
        }
    }
})

export const allBuckets = (state) => state.buckets.buckets
export const { editBucketName, addCard, updateCard, deleteBucket, addBucket, deleteCard, toggleInitialEditValue } = bucketSlice.actions

export default bucketSlice.reducer