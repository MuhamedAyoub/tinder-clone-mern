import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "man",
    gender_interest: "woman",
    url: "",
    about: "",
    matches: [],
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.type.checkbox ? e.target.checked : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <form>
      <section>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          name="first_name"
          placeholder="First Name"
          type="text"
          onChange={handleChange}
          required
          value={formData.first_name}
        />
        <label htmlFor="dab_day">Birthday</label>
        <div className="multi-input">
          <input
            value={formData.dob_day}
            id="dob_day"
            name="dob_day"
            placeholder="DD"
            type="number"
            onChange={handleChange}
            required
          />
          <input
            value={formData.dob_month}
            required
            id="dob_month"
            name="dob_month"
            placeholder="MM"
            type="number"
            onChange={handleChange}
          />
          <input
            value={formData.dob_year}
            required
            id="dob_year"
            name="dob_year"
            placeholder="YYYY"
            type="number"
            onChange={handleChange}
          />
        </div>
        <label>Gender</label>

        <div className="multi-input">
          <input
            required
            name="gender_identity"
            id="gender_man_identity"
            type="radio"
            value="man"
            onChange={handleChange}
            checked={formData.gender_identity === "man"}
          />
          <label htmlFor="gender_man_identity">man</label>

          <input
            required
            name="gender_identity"
            id="gender_woman_identity"
            type="radio"
            value="woman"
            onChange={handleChange}
            checked={formData.gender_identity === "woman"}
          />
          <label htmlFor="gender_woman_identity">woman</label>

          <input
            required
            name="gender_identity"
            id="gender_more_identity"
            type="radio"
            value="more"
            onChange={handleChange}
            checked={formData.gender_identity === "more"}
          />
          <label htmlFor="gender_more_identity">more</label>
        </div>
        <label htmlFor="show-gender">Show Gender on my Profile</label>

        <input
          required
          id="show-gender"
          type="checkbox"
          name="show_gender"
          onChange={handleChange}
          checked={formData.show_gender}
        />
        <label>Show Me</label>

        <div className="multi-input">
          <input
            required
            id="man-gender-interest"
            type="radio"
            name="gender_interest"
            value="man"
            onChange={handleChange}
            checked={formData.gender_identity === "man"}
          />
          <label htmlFor="man-gender-interest">Man</label>
          <input
            required
            id="woman-gender-interest"
            type="radio"
            name="gender_interest"
            value="woman"
            onChange={handleChange}
            checked={formData.gender_interest === "woman"}
          />
          <label htmlFor="woman-gender-interest">Woman</label>
          <input
            required
            id="everyone-gender-interest"
            type="radio"
            name="gender_interest"
            value="everyone"
            onChange={handleChange}
            checked={formData.gender_interest === "everyone"}
          />
          <label htmlFor="everyone-gender-interest">Everyone</label>
        </div>

        <label htmlFor="about">About me</label>
        <input
          value={formData.about}
          id="about"
          type="text"
          name="about"
          required={true}
          placeholder="I like long walks..."
          onChange={handleChange}
        />

        <input type="submit" />
      </section>
      <section>
        <label htmlFor="url">Profile Photo</label>
        <input
          required
          type="url"
          name="url"
          id="url"
          onChange={handleChange}
        />
        <div className="photo-container">
          <img src={formData.url + ".png"} alt="profile pic preview" />
        </div>
      </section>
    </form>
  );
};

export default Form;
