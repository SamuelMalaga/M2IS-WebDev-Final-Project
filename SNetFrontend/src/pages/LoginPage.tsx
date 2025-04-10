import React from "react";

function LoginPage(){
<<<<<<< Updated upstream
=======
    const navigate = useNavigate();
    const [loginFormNotification,setloginFormNotification] = useState(
            {
                message:"",
                notification_display:"is-hidden"
            }
        );
    const [loginFormData, setLoginFormData] = useState({
        user_email:"",
        user_password:""
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setLoginFormData((prevFormData) => ({...prevFormData,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:6262/token',loginFormData,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (response){
            console.log("Response",response)
        }).catch(function (error){
            // console.log(error.response.data)
            setloginFormNotification({
                message: error.response.data,
                notification_display:""
            })
        })
        // navigate("/")
    }
    document.addEventListener('DOMContentLoaded', () => {
        
        (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
          const $notification = $delete.parentNode;
            
          $delete.addEventListener('click', () => {
            $notification?.parentNode?.removeChild($notification);
          });
        });
      });

>>>>>>> Stashed changes
    return(
        <h1>LoginPage</h1>
    )
}
export default LoginPage;