const Form = ({ addUser }) => {
  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    //bu method ile forma girilen bilgilerden bir class oluşturur
    //ancak inputlara   name="" vermek gerekli
    const user = Object.fromEntries(form.entries());
    addUser(user);
  };

  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">İsim</label>
        <input
          className="form-control"
          placeholder="ör:Mustafa"
          id="name"
          type="text"
          name="name"
        />
      </div>

      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          placeholder="ör:must@gmail.com"
          id="email"
          type="email"
          name="email"
        />
      </div>

      <div>
        <label htmlFor="age">Yaş</label>
        <input
          className="form-control"
          placeholder="ör:15"
          id="age"
          type="number"
          name="age"
        />
      </div>

      <div className="d-flex justify-content-end my-4">
        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
      </div>
    </form>
  );
};

export default Form;
