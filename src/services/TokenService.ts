import * as CryptoJS from "crypto-js";

export default class TokenService {
  getJwtToken() {
    const encrypted = sessionStorage.getItem("jwt");
    const token = this.decrypt(encrypted?.toString());

    return `Bearer ${token}`;
  }
  setJwtToken(token: string) {
    const encrypted = this.encrypt(token)
    sessionStorage.setItem("jwt", encrypted);
  }
  encrypt(token: string) {
    return CryptoJS.AES.encrypt(token, import.meta.env.VITE_SECRET_KEY).toString();
  }

  decrypt(encryption: string | undefined) {
    return CryptoJS.AES.decrypt(encryption, import.meta.env.VITE_SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    )
  }
}
