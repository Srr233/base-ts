interface UserMain {
  nickName: string;
  from: string;
  admin?: string;
}
interface UserSend extends UserMain {
  say(message: string, user: UserMain): void;
  showMessage(message: Message): void;
}
interface Message {
  message: string;
  user: UserMain;
}

class User {
  readonly nickName;
  readonly from;
  admin
  
  constructor(options: UserMain) {
    this.nickName = options.nickName;
    this.from = options.from;
    this.admin = options.admin;
  }

  say(message: string, user: UserSend) {
    const options: Message = {
      message,
      user: this
    };
    user.showMessage(options);
  }
  showMessage(message: Message) {
    console.log(`${message.user.nickName}: ${message.message}`);
  }
}

function paintDots(timeout: number, during: number) {
  const id = setInterval(() => console.log('.'), timeout);
  setTimeout(() => { clearInterval(id) }, during);
}
function paintMessage(during: number) {
  const draw = async function (func: {(): void}): Promise<void> {
    await new Promise((res) => {
      paintDots(1000, during);
      setTimeout(() => { 
        func();
        res(true);
      }, during);
    })
  }
  return draw;
}
const sendingMessageApp = paintMessage(5000);

const biba = new User({ nickName: 'Sasatb', admin: 'bombom', from: 'Belarus' });
const boba = new User({ nickName: 'Pasha&77', from: 'Russia' });

const messagesArr = [
  () => { boba.say('Maybe but I nixuya ne ponimau', biba) },
  () => { biba.say('Da i pohui', boba) },
  () => { boba.say('Dashe дверь вiдкрыта', biba) }
];
async function go(i: number, arr: {(): void}[]) {
  if (arr.length !== i) {
    await sendingMessageApp(arr[i]);
    go(i + 1, arr);
    return;
  }
}

go(0, messagesArr);
