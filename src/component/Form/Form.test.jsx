//!react mock için//    jest.fn()   kullanılır
import { render, screen } from "@testing-library/react";
import Form from ".";
// user  import una dikkat et farklı yerden çağrılabilir
import user from "@testing-library/user-event";
import { expect } from "vitest";

//!Mock parametrede gönderilen FN leri test etmede kullanılır

//! form görevini doğru şekilde yerine getiriyor mu?
// bütün inputları doldurduktan sonra
// formu gönderince "addUser" fonksiyonu çalışıyor mu?

it('form gönderilince "addUser" doğru parametreleri alarak çalışıyor mu?', async () => {
  // mock > orjinal Fn yi taklit etmek için kullanılır
  //Tam olarak FN nin görevlerini yapmaz Sadece bunları yapar:
  // ne zaman çağrıldı | kaç kere çağrıldı | hangi parametrelerle çağrıldı
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  //label'inda "İsim" yazan INPUT'LARI çağırdık
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByLabelText("Yaş");
  const button = screen.getByRole("button");

  //! diğer yöntem
  // await user.click(nameInp);
  // await user.keyboard("bilal");

  // name input
  await user.type(nameInp, "bilal");

  // mail input
  await user.type(mailInp, "bilal@gmail.com");

  // age input
  await user.type(ageInp, "28");

  // formu gönder
  await user.click(button);

  // Run addUser fonksiyonu çalışır
  expect(mock).toBeCalled();

  //Çalışan FN doğru parametreleri aldımı?
  expect(mock).toBeCalledWith({
    name: "bilal",
    email: "bilal@gmail.com",
    age: "28",
  });
});
