import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelected = (id) => {
    this.setState({ selectedPostId: id });
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Andrew",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went Wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => <Post title={post.title} author={post.author} key={post.id} clicked={() => this.postSelected(post.id)} />);
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
