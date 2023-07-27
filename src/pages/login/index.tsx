import { Checkbox, TextField } from "@mui/material";
import logo from "../../assets/pagina-de-login.png";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { blue } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { apiConvenio } from "../../services/api/api";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [cpfCnpjVerify, setCpfCnpjVerify] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [password, setPassword] = useState("");

  console.log(cpfCnpjVerify);
  
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userRegister = {
      cpf_cnpj: cpfCnpjVerify,
      senha: password
    }

    setLoading(true);
    try {
      const response = await apiConvenio.post('/login', userRegister);
      if(response) {
        localStorage.setItem('token', response.data.loginUser.inscricao_estadual);
        toast.success('Login efetuado com sucesso!');
        return navigate('/retaguarda-convenio/conveniado-pessoa');   
      }
    } catch (error) {
      return toast.error('Usuário ou senha incorretos!');
    }
    setLoading(false);
  }

  function formatCpfCnpj(value: string) {
    const cleanedValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const isCpf = cleanedValue.length === 11;

    if (isCpf) {
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else {
      return cleanedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }
  }

  function handleCpfCnpjChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCpfCnpjVerify(value);
    
    const formattedValue = formatCpfCnpj(value);
    setCpfCnpj(formattedValue);
  }

  function handleCheckBox(value: boolean) {
        if (value) {
          console.log("apertou");
        } else {
          console.log("tirou");
        }
        setCheckBoxValue(value);
      }

  return (
    <>
      <main className="bg-green-800 bg-bottom font-fontPopping">
        <div className="flex justify-center items-center h-screen">
          <div className="h-[26.50rem] w-[26rem] bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-3xl shadow-2xl">
            <div className="flex justify-center items-center flex-col">
              <img className="h-20 w-20 mt-8" alt="logosidia" src={logo} />
              <div className="w-80">
                <form onSubmit={handleSubmit}>
                  <TextField
                    required
                    label="CPF/CNPJ"
                    type="text"
                    value={cpfCnpj}
                    autoComplete="off"
                    onChange={handleCpfCnpjChange}
                    inputProps={{ maxLength: 18 }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "normal",
                        marginTop: "-5px",
                      },
                    }}
                    sx={{
                      input: {
                        color: "white",
                        borderBottom: "1.8px solid white",
                      },
                      ":hover": {
                        borderBottom: "1px solid blue",
                      },
                    }}
                    style={{
                      color: "white",
                      width: "100%",
                      maxWidth: "26.50rem",
                      marginTop: "35px",
                      marginBottom: "8px",
                    }}
                    variant="standard"
                  />
                  <TextField
                    required
                    label="Senha / Criação de senha"
                    type="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "normal",
                        marginTop: "-5px"
                      }
                    }}
                    sx={{
                      input: {
                        color: "white",
                        borderBottom: "1.8px solid white"
                      },
                      ":hover": {
                        borderBottom: "1px solid blue"
                      }
                    }}
                    style={{
                      color: "white",
                      width: "100%",
                      maxWidth: "26.50rem",
                      marginTop: "15px"
                    }}
                    variant="standard"
                  />
                  <div className="mt-3 ml-[-12px]">
                    <Checkbox
                      {...label}
                      color="success"
                      size="small"
                      sx={{
                        color: blue[600],
                        "&.Mui-checked": { color: blue[500] },
                        marginBottom: "2px"
                      }}
                      //onChange={(e) => handleCheckBox(e.target.checked)}
                    />
                    <span className="ml-0 text-white text-sm">
                      Manter conectado
                    </span>
                  </div>
                  <div className="flex justify-center items-center mt-7 h-11 w-80 bg-green-600 rounded-lg text-white ease-in duration-300 hover:bg-green-900">
                    <div className={`${loading ? "hidden" : "flex"}`}>
                      <button
                        type="submit"
                        className="text-xl h-11 w-80 bg-blue-600 rounded-lg text-white ease-in duration-300 hover:bg-blue-900"
                      >
                        Entrar
                      </button>
                    </div>
                    <div
                      className={`${
                        loading ? "flex" : "hidden"
                      } flex justify-center items-center`}
                    >
                      <svg
                        role="status"
                        className="inline mr-2 w-5 h-5 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-base">Carregando...</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          style={{
            height: "700px",
            width: "480px",
            letterSpacing: "0.04rem",
            fontSize: "15px"
          }}
          theme="dark"
        />
      </main>
    </>
  );
};

export default Login;