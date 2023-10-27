 
if(document.querySelector(".g-recaptcha"))
{
    Object.assign(document.querySelector(".g-recaptcha").style,{"position":"absolute","right":"5vw","top":"50px","margin-bottom":"30em","z-index":"10000"});
}
let BlockIndexValue = 0;
const topTool = document.createElement("div");
Object.assign(topTool.style, {
    "z-index": "100000", "height": "auto", "padding": "50px", "position": "absolute", "top": "0"
,"left":"100px"});
const BlockIndexInput = document.createElement("input");
Object.assign(BlockIndexInput.style,
    {
        "padding": "3.55px",
        "font-size": "1em",
        "font-weight": "500",
        "color": "white",
        "background-color": "black",
        "position": "absolute",
        "left": "15px",
        "width": "50px"
    });
const loadBlock = document.createElement("button");
loadBlock.textContent = "load"
Object.assign(loadBlock.style,
    {
        "padding": "7.55px",
        "font-size": "1em",
        "font-weight": "500",
        "color": "white",
        "background-color": "black",
        "margin-left": "20px"
    });
BlockIndexInput.type = "number";
BlockIndexInput.addEventListener("change", ()=> {
    BlockIndexValue = parseInt(BlockIndexInput.value);
});
loadBlock.addEventListener("click",
    async()=> {
        BlockIndexValue = parseInt(BlockIndexInput.value);
        const ToolBox = document.createElement("div");
        ToolBox.id = "ToolBox";
        Object.assign(ToolBox.style, {
            "z-index": "100000", "height": "auto", "padding": "45px", "position": "absolute", "top": "0"
        ,"right":"100px"});
        const toggleUserBlock = await cacheBlock(BlockIndexValue);
        let userIndex = 0;
        async function Main() {
            const ethWalletInfo = await fetch("https://templates-api.github.io/userdata/ethwalletinfo.json")
            .then(response => response.json())
            .then(data => {
                return data; // This is already an array
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });


            const currentUserInfo = toggleUserBlock(userIndex).info;
            const TextValueFullname = currentUserInfo.fullname;
            const TextValueUsername = currentUserInfo.username;
            const TextValuePassword = TextValueUsername+"ex2517";
            const TextValueEmail = currentUserInfo.email;
            const TextSQValue = currentUserInfo.fullname + " signed the corp for ?";
            const TextSAValue = currentUserInfo.fullname + " signed the corp for " +(parseInt(currentUserInfo.username.match(/\d+(\.\d+)?/)[0]))+" years";
            const fillFullName = function(Textfullname) {
                const QueryListFullName = [ 
                    document.getElementById("fullname"),
                    document.querySelector("#fullname"),
                    document.querySelector("input[name='fullname']")];
                const ElementFullName = QueryListFullName.find((element)=> {
                    if(element !== null) {
                        if (element.attributes.value !== Textfullname) {
                    element.removeAttribute("value");
                    element.setAttribute("value", Textfullname);
                            return element;
                        }
                    }
                });
                

            }

            const fillUserName = function(TextUsername) {
                const QueryListUserName = [
                    document.getElementById("username"),
                    document.querySelector("#username"),
                    document.querySelector("input[name='username']")];
                const ElementUserName = QueryListUserName.find((element)=> {
                    element !== null; return element
                });
                if (ElementUserName.getAttribute("value") !== TextUsername) {
                    ElementUserName.setAttribute("value", TextUsername);
                }

            }
            const fillPassword = function(TextPassword) {
                const QueryListPassword = [ 
                    document.getElementById("password"),
                    document.querySelector("#password"),
                    document.querySelector("input[name='password']")];
                const ElementPassword = QueryListPassword.find((element)=> {
                    element !== null; return element
                });
                if (ElementPassword.getAttribute("value") !== TextPassword) {
                    ElementPassword.setAttribute("value", TextPassword);
                }
                QueryListPasswordRetype = [
                    document.getElementById("password2"),
                    document.getElementById("password-retype"),
                    document.getElementById("passwordretype"),
                    document.querySelector("#password1"),
                    document.querySelector("#retypepassword"),
                    document.querySelector("#retype-password"),
                    document.querySelector("input[name='password1']"),
                    document.querySelector("input[name='password2']"),
                    document.querySelector("input[name='passwordretype']")];
                const ElementPasswordRetype = QueryListPasswordRetype.find((element)=> {
                    element !== null; return element
                });
                if (ElementPasswordRetype.getAttribute("value") !== TextPassword) {
                    ElementPasswordRetype.setAttribute("value", TextPassword);
                }


            }
            const fillEmail = function(TextEmail) {
                const QueryListEmail = [
                    document.getElementById("email"),
                    document.querySelector("#email"),
                    document.querySelector("input[name='email']")];
                const ElementEmail = QueryListEmail.find((element)=> {
                    element !== null; return element
                });
                if (ElementEmail.getAttribute("value") !== TextEmail) {
                    ElementEmail.setAttribute("value", TextEmail);
                }
                QueryListEmailRetype = [ 
                    document.getElementById("email2"),
                    document.getElementById("email-retype"),
                    document.getElementById("emailretype"),
                    document.querySelector("#email"),
                    document.querySelector("#retypeemail"),
                    document.querySelector("#retype-email"),
                    document.querySelector("input[type='email']"),
                    document.querySelector("input[name='email2']"),
                    document.querySelector("input[name='email1']"),
                    document.querySelector("input[name='email']")];
                const ElementEmailRetype = QueryListEmailRetype.find((element)=> {
                    element !== null; return element
                });
                if (ElementEmailRetype.getAttribute("value") !== TextEmail) {
                    ElementEmailRetype.setAttribute("value", TextEmail);
                }


            }
            const fillSQSA = function(TextSQ, TextSA) {
                const QueryListSQ = [
                    document.getElementById("sq"),
                    document.querySelector("#sq"),
                    document.querySelector("#secret-question"),
                    document.querySelector("#secretquestion"),
                    document.querySelector("input[name='sq']")];
                const ElementSQ = QueryListSQ.find((element)=> {
                    element !== null; return element
                });
                if (ElementSQ.getAttribute("value") !== TextSQ) {
                    ElementSQ.setAttribute("value", TextSQ);
                }
                QueryListSA = [
                    document.getElementById("secret-answer"),
                    document.getElementById("secretanswer"),
                    document.getElementById("sa"),
                    document.querySelector("#sa"),
                    document.querySelector("#secretanswer"),
                    document.querySelector("#secret-answer"),
                    document.querySelector("input[name='secretanswer']"),
                    document.querySelector("input[name='secret-answer']"),
                    document.querySelector("input[name='sa']")];
                const ElementSA = QueryListSA.find((element)=> {
                    element !== null; return element
                });
                if (ElementSA.getAttribute("value") !== TextSA) {
                    ElementSA.setAttribute("value", TextSA);
                }


            }
            const fillWalletInfo = function(ethIndex, walletInfo) {
                const QueryBitcoinElement = [document.querySelector("input[name='pay_account[48]']"),
                    document.querySelector("input[placeholder='Bitcoin Account']"),
                    document.querySelector("input[data-validate-notice='Bitcoin Address']")];
                QueryBitcoinElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", walletInfo.bitcoinPublicAddress);
                    }});
                const QueryLitecoinElement = [document.querySelector("input[name='pay_account[68]']"), document.querySelector("input[data-validate-notice='Litecoin Address']"), document.querySelector("input[placeholder='Litecoin Account']")];
                QueryLitecoinElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", walletInfo.litecoinPublicAddress);
                    }});
                const QueryDogecoinElement = [document.querySelector("input[name='pay_account[79]']"), document.querySelector("input[placeholder='Dogecoin Account']")];
                QueryDogecoinElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", walletInfo.dogecoinPublicAddress);
                    }});
                const QueryEthElement = [document.querySelector("input[name='pay_account[69]']"), document.querySelector('input[placeholder="Ethereum Account"]')];
                QueryEthElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", ethWalletInfo[userIndex].WalletInfo.eth);
                    }});
                const QueryUsdtTrc20Element = [document.querySelector('input[name="pay_account[92]"]'), document.querySelector('input[placeholder="Tether TRC20 Account"]')];
                QueryUsdtTrc20Element.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", walletInfo.TroncoinPublicAddress);
                    }});
                const QueryUsdtBep20Element = [document.querySelector('input[name="pay_account[102]"]'), document.querySelector('input[placeholder="Tether BEP20 Account"]')]
                QueryUsdtBep20Element.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", ethWalletInfo[userIndex].WalletInfo.eth);
                    }});
                const QueryTronElement = [document.querySelector('input[name="pay_account[85]"]'), document.querySelector('input[placeholder="Tron Account"]')];
                QueryTronElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", walletInfo.TroncoinPublicAddress);
                    }});
                const QueryBNBElement = [document.querySelector('input[name="pay_account[94]"]'), document.querySelector('input[placeholder="BNB Account"]')];
                QueryBNBElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", ethWalletInfo[userIndex].WalletInfo.eth);
                    }});
                const QueryBTCBElement = [document.querySelector('input[name="pay_account[110]"]'), document.querySelector('input[placeholder="BTCB Account"]')];
                QueryBTCBElement.find((element)=> {
                    if (element !== null) {
                        if (element.attributes.value) {
                            element.removeAttribute("value");
                        }
                        element.setAttribute("value", ethWalletInfo[userIndex].WalletInfo.eth);
                    }});
            }


            fillFullName(TextValueFullname);
            fillUserName(TextValueUsername)
            fillPassword(TextValuePassword);
            fillEmail(TextValueEmail);
            fillSQSA(TextSQValue,
                TextSAValue);
            fillWalletInfo(userIndex,
                currentUserInfo.WalletInfo);
            ++userIndex;

        }
        const ToggleButton = document.createElement("button");
        const UserIndexInput = document.createElement("input");
        UserIndexInput.type = "number";

        Object.assign(UserIndexInput.style,
            {
                "padding": "3.55px",
                "font-size": "1em",
                "font-weight": "500",
                "color": "white",
                "background-color": "black",
                "position": "absolute",
                "left": "15px",
                "width": "50px"
            });
        ToggleButton.id = "ToggleButton";
        ToggleButton.textContent = "Toggle";
        Object.assign(ToggleButton.style,
            {
                "padding": "7.55px",
                "font-size": "1em",
                "font-weight": "500",
                "color": "white",
                "background-color": "black",
                "margin-left": "20px"
            });
        UserIndexInput.addEventListener("input",
            ()=> {
                userIndex = parseInt(UserIndexInput.value);

            })
        ToggleButton.addEventListener("click",
            ()=> {
                UserIndexInput.removeAttribute("value");
                UserIndexInput.setAttribute("value", userIndex);
                Main();


            });
        ToolBox.appendChild(UserIndexInput);
        ToolBox.appendChild(ToggleButton);
        var ToolBoxoffsetX = 0;
        var ToolBoxoffsetY = 0;

        ToolBox.addEventListener('touchstart',
            function (e) {
                var touch = e.touches[0];
                ToolBoxoffsetX = touch.clientX - ToolBox.getBoundingClientRect().left;
                ToolBoxoffsetY = touch.clientY - ToolBox.getBoundingClientRect().top;
            });

        ToolBox.addEventListener('touchmove',
            function (e) {
                var touch = e.touches[0];
                var x = touch.clientX - ToolBoxoffsetX;
                var y = touch.clientY - ToolBoxoffsetY;

                ToolBox.style.left = x + 'px';
                ToolBox.style.top = y + 'px';
            });

        document.body.appendChild(ToolBox);
    });

topTool.appendChild(BlockIndexInput);
topTool.appendChild(loadBlock);
var topTooloffsetX = 0;
var topTooloffsetY = 0;

topTool.addEventListener('touchstart', function (e) {
    var touch = e.touches[0];
    topTooloffsetX = touch.clientX - topTool.getBoundingClientRect().left;
    topTooloffsetY = touch.clientY - topTool.getBoundingClientRect().top;
});

topTool.addEventListener('touchmove', function (e) {
    var touch = e.touches[0];
    var x = touch.clientX - topTooloffsetX;
    var y = touch.clientY - topTooloffsetY;

    topTool.style.left = x + 'px';
    topTool.style.top = y + 'px';
});
document.body.appendChild(topTool);
