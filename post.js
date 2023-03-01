const { createStore } = require("redux");
const initialState = {
  post: [
    {
      id: 3,
      title: "my name is naveed warraich",
    },
  ],
};
const Add_post_Action = (post) => {
  return {
    type: "Add_Post",
    paylaod: post,
  };
};
const Remove_post_Action = (id) => {
  return {
    type: "Remove_Post",
    paylaod: id,
  };
};
const PostReducer = (state = initialState, action) => {
  if (action.type === "Add_Post") {
    return { post: [...state.post, action.paylaod] };
  } else if (action.type === "Remove_Post") {
    return {
      post: state.post.filter((post) => {
        return post.id !== action.paylaod;
      }),
    };
  } else {
    return state;
  }
};

const store = createStore(PostReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(
  Add_post_Action({
    id: 1,
    title: "fast ",
  })
);
store.dispatch(
  Add_post_Action({
    id: 2,
    title: "furious ",
  })
);

store.dispatch(Remove_post_Action(1));
