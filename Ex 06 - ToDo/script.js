Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'eGPZE0VDKrdEEO0RUPAqsE0kvfXKPs4eQL7QFDdj', // This is your Application ID
  'AatvRHZZOvs9Ep2Cp9tdYG1fJMvFOSg1fhZ4XVGH' // This is your Javascript key
);

const input = document.getElementById("entrada");
const botao = document.getElementById("btEntrada");
const div = document.getElementById("div");

let tarefas = [];

function gerarLista() {

  div.innerHTML = "";
  input.value = "";

  for(let i = 0; i<tarefas.length; i++){

    const li = document.createElement("li");
    li.value = "class", "li";
    
    const txt = document.createTextNode(
      `${tarefas[i].get("Description")}`
    );

    const div2 = document.createElement("div");
    div2.value = "class", "div2";
  
    const check = document.createElement("input");
    check.type = "checkbox";
    check.value = "class", "check";
    check.checked = tarefas[i].get("Conclusion");

    check.onclick = (evt) => atualizarTarefa(evt, tarefas[i], div2);

    const remove = document.createElement("button");
    remove.value = "class", "remove";
    remove.innerHTML = 'remover';
    
    remove.onclick = (evt) => removerTarefa(evt, tarefas[i]);

    div.appendChild(li);
    li.appendChild(check);
    div2.appendChild(txt); 
    li.appendChild(div2);
    li.appendChild(remove);
    
  }
}

const exibirTarefa = async () => {
  const Task = Parse.Object.extend('Task');
  const query = new Parse.Query(Task);
  try {
    const results = await query.find();
    tarefas = results;
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Task', error);
  }
};


const criarTarefa = async () => {
  const myNewObject = new Parse.Object('Task');
  myNewObject.set('Description', input.value);
  myNewObject.set('Conclusion', false);
  try {
    const result = await myNewObject.save();
    console.log('Task created', result);
    exibirTarefa();
  } catch (error) {
    console.error('Error while creating Task: ', error);
  }
};

const atualizarTarefa = async (evt,task,div2) => {
  task.set('Conclusion',evt.target.checked);

    if(evt.target.checked){
      div2.className = "riscado";
    } else{
      div2.className = "naoRiscado"
    }

    try {
      const response = await task.save();
      console.log(response.get('Conclusion'));
      console.log('Task updated', response);
    } catch (error) {
      console.error('Error while updating Task', error);
      }
};

const removerTarefa = async (evt, task) => {
  task.set('Conclusion', evt.target.remove);
    try {
      const response = await task.destroy();
      console.log(response.get('Conclusion'));
      console.log('Deleted ParseObject', response);
      exibirTarefa();
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
};

botao.onclick = criarTarefa;
exibirTarefa();
gerarLista();
atualizarTarefa();
removerTarefa();
console.log(atualizarTarefa());
console.log(removerTarefa());