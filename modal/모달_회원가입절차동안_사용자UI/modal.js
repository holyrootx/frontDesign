
const idCheck = {
    defaultIcon : document.querySelector(".id-check-default-icon"),
    messageBox : document.querySelector(".modal-id-check-message-box"),
    successIcon : document.querySelector(".id-check-success-icon"),
    failedIcon : document.querySelector(".id-check-failed-icon"),
    defaultMessage : "아이디를 검사하고 있어요.",
    successMessage : "사용 가능한 아이디예요!",
    failedMessage : "사용 불가한 아이디에요."
};
const passwordCheck = {
    defaultIcon : document.querySelector(".password-check-default-icon"),
    messageBox : document.querySelector(".modal-password-check-message-box"),
    successIcon : document.querySelector(".password-check-success-icon"),
    failedIcon : document.querySelector(".password-check-failed-icon"),
    defaultMessage : "비밀번호를 검사하고 있어요.",
    successMessage : "사용 가능한 비밀번호예요!",
    failedMessage : "사용 불가한 비밀번호예요."
};

const emailCheck = {
    defaultIcon : document.querySelector(".email-check-default-icon"),
    messageBox : document.querySelector(".modal-email-check-message-box"),
    successIcon : document.querySelector(".email-check-success-icon"),
    failedIcon : document.querySelector(".email-check-failed-icon"),
    defaultMessage : "이메일을 검사하고 있어요.",
    successMessage : "사용 가능한 이메일이에요!",
    failedMessage : "사용 불가한 이메일이에요."
};

const nameCheck = {
    defaultIcon : document.querySelector(".name-check-default-icon"),
    messageBox : document.querySelector(".modal-name-check-message-box"),
    successIcon : document.querySelector(".name-check-success-icon"),
    failedIcon : document.querySelector(".name-check-failed-icon"),
    defaultMessage : "이름을 검사하고 있어요.",
    successMessage : "사용 가능한 이름이에요!",
    failedMessage : "사용 불가한 이름이에요."
};

const serverCheck = {
    defaultIcon : document.querySelector(".server-check-default-icon"),
    messageBox : document.querySelector(".modal-server-check-message-box"),
    successIcon : document.querySelector(".server-check-success-icon"),
    failedIcon : document.querySelector(".server-check-failed-icon"),
    defaultMessage : "서버에서 검사하고 있어요.",
    successMessage : "아이디를 생성 중 입니다.",
    failedMessage : "생성 불가한 아이디에요."
};

function initModal(){
    const modal = document.getElementById("progressModal");
    const loader = document.querySelector(".loader");

    modal.classList.remove("hidden");
    loader.classList.remove("hidden");
}

function destroyModal(){
    const modal = document.getElementById("progressModal");
    const loader = document.querySelector(".loader");
    
    const checkBoxes = document.querySelectorAll(".validation-status");
    const fields = ["아이디를","비밀번호를","이메일을","이름을","서버에서"];

    checkBoxes.forEach((box,index) => {
        box.querySelector(".fa-circle-exclamation").classList.remove("hidden");
        box.querySelector(".fa-circle-check").classList.add("hidden");
        box.querySelector(".fa-circle-xmark").classList.add("hidden");
        box.querySelector("p").textContent = `${fields[index]} 검사하고 있어요.`;
    });

    loader.classList.add("hidden");
    modal.classList.add("hidden");
}

function success(result){
    result.failedIcon.classList.add("hidden");
    result.defaultIcon.classList.add("hidden");
    result.successIcon.classList.remove("hidden");
    result.messageBox.textContent = result.successMessage;
}

function failed(result){
    result.defaultIcon.classList.add("hidden");
    result.failedIcon.classList.remove("hidden");
    result.messageBox.textContent = result.failedMessage;
}


function success1(defaultIconElem,checkIconElem,messageBox,message){
    defaultIconElem.classList.add("hidden");
    checkIconElem.classList.remove("hidden");
    messageBox.textContent = message;
}

function failed1(defaultIconElem,checkFailedIconElem,messageBox,message){
    defaultIconElem.classList.add("hidden");
    checkFailedIconElem.classList.remove("hidden");
    messageBox.textContent = message;
}

const idDefaultIcon=document.querySelector(".id-check-default-icon");
const passwordDefaultIcon=document.querySelector(".password-check-default-icon");
const emailDefaultIcon=document.querySelector(".email-check-default-icon");
const nameDefaultIcon=document.querySelector(".name-check-default-icon");
const serverDefaultIcon=document.querySelector(".server-check-default-icon");

const modalIdCheckMessageBox =document.querySelector(".modal-id-check-message-box");
const modalPasswordCheckMessageBox =document.querySelector(".modal-password-check-message-box");
const modalEmailCheckMessageBox =document.querySelector(".modal-email-check-message-box");
const modalNameCheckMessageBox =document.querySelector(".modal-name-check-message-box");
const modalServerCheckMessageBox =document.querySelector(".modal-server-check-message-box");

const idCheckIcon=document.querySelector(".id-check-success-icon");
const passwordCheckIcon=document.querySelector(".password-check-success-icon");
const emailCheckIcon=document.querySelector(".email-check-success-icon");
const nameCheckIcon=document.querySelector(".name-check-success-icon");
const serverCheckIcon=document.querySelector(".server-check-success-icon");

const idCheckFailedIcon=document.querySelector(".id-check-failed-icon");
const passwordCheckFailedIcon=document.querySelector(".password-check-failed-icon");
const emailCheckFailedIcon=document.querySelector(".email-check-failed-icon");
const nameCheckFailedIcon=document.querySelector(".name-check-failed-icon");
const serverCheckFailedIcon=document.querySelector(".server-check-failed-icon");

const idCheckSuccessMessage = "아이디 검증에 성공했어요";
const passwordCheckSuccessMessage = "비밀번호 검증에 성공했어요";
const emailCheckSuccessMessage = "이메일 검증에 성공했어요";
const nameCheckSuccessMessage = "이름 검증에 성공했어요";
const serverCheckSuccessMessage = "서버에서 검증에 성공했어요";

const idCheckFailMessage = "아이디 검증에 실패했어요";
const passwordCheckFailMessage = "비밀번호 검증에 실패했어요";
const emailCheckFailMessage = "이메일 검증에 실패했어요";
const nameCheckFailMessage = "이름 검증에 실패했어요";
const serverCheckFailMessage = "서버에서 검증에 실패했어요";

// signupBtn.addEventListener("click", () => {
//     waitMessage.textContent = "잠시만 기다려주세요..."; // (대기 멘트)
//     waitMessage.classList.remove("success"); // 초록색을 기본상태로 (대기 상황)
//     loader.classList.remove("hidden"); // 로딩창 보이게하기(대기 상황)
//     checkIcon.classList.add("hidden"); // 성공창 숨기기 (대기 상황)
//     modal.classList.remove("hidden"); // 모달 보이기 (대기 상황)
    
//     setTimeout(()=>{
//         waitMessage.textContent = "회원가입 성공!!!"; // (성공)
//         waitMessage.classList.add("success"); // (성공)
//         loader.classList.add("hidden"); // (대기 상태를 안보이게 하기)
//         checkIcon.classList.remove("hidden"); // 체크 (성공 상황)
//     },3200);
//     setTimeout(() => {
//         checkIcon.classList.add("hidden"); // (성공 상황)
//         waitMessage.classList.add("success");
        
//         modal.classList.add("hidden"); // 모달 숨기기
//     },4000);
// });

const signupBtn  = document.querySelector("#signupBtn");

signupBtn.addEventListener("click", () => {
    setTimeout(()=>{
        initModal();
        setTimeout(()=>{
            success(idCheck)
            setTimeout(()=>{
                success(passwordCheck)
                setTimeout(()=>{
                    failed(emailCheck)
                    setTimeout(()=>{
                        success(nameCheck)
                        setTimeout(()=>{
                            failed(serverCheck)
                            setTimeout(()=>{
                                destroyModal();
                            },2000)
    
                        },1000);
                    },1000);
                    
                },1000);
            },1000);
            
        },1000);
        
    },1000)
});

