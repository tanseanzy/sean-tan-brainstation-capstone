import React from "react";
import axios from "axios";
import "./NewProduct.scss";

const NewProduct = () => {
  // const history = useHistory();
  const token = sessionStorage.getItem("token");
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const createProduct = (obj) => {
    axios.post("http://localhost:8080/api/users/createproduct", obj, config);
    console.log("inside create post");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      brandName: e.target.brandname.value,
      productName: e.target.productname.value,
      price: e.target.price.value,
      image: e.target.image.value,
      categoryType: e.target.categorytype.value,
      description: e.target.description.value,
      concerns: e.target.concerns.value,
      skinType: e.target.skintype.value,
    };
    createProduct(newProduct);
    alert("post created!");
    // history.push("/posts");
  }

  return (
    <div>
      <h1>create post</h1>
      <form className="" onSubmit={handleSubmit}>
        <label className="">brandname</label>
        <div>
          <input className="" type="text" name="brandname" />
        </div>
        <label className="">productname</label>
        <div>
          <input className="" type="text" name="productname" />
        </div>
        <label className="">price</label>
        <div>
          <input className="" type="text" name="price" />
        </div>
        <label className="">image</label>
        <div>
          <input className="" type="text" name="image" />
        </div>
        <label className="">categorytype</label>
        <div>
          <input className="" type="text" name="categorytype" />
        </div>
        <label className="">description</label>
        <div>
          <input className="" type="text" name="description" />
        </div>
        <label className="">concerns</label>
        <div>
          <input className="" type="text" name="concerns" />
        </div>
        <label className="">skintype</label>
        <div>
          <input className="" type="text" name="skintype" />
        </div>
        <button className="" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
