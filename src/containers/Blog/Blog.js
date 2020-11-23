import React, { Component } from "react";

// import axios from "axios";
import axios from "../../axios";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
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
        console.log(error, "test");
        return this.setState({ error: true });
      });
  }
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went Wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => <Post title={post.title} author={post.author} key={post.id} clicked={() => this.postSelected(post.id)} />);
    }
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Blog;
