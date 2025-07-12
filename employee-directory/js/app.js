// Mock data loaded from Freemarker
// Example static data; replace with actual data loading logic as needed
let employees = [
  {id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", department: "Engineering", role: "Developer"},
  {id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", department: "Marketing", role: "Manager"},
  {id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", department: "HR", role: "Recruiter"},
  {id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com", department: "Sales", role: "Salesperson"}
];

let editingId = null;
let currentFilters = { name: '', dept: '', role: '' };
let currentSearch = '';
let currentSort = '';
let pageSize = 4;
let currentPage = 1;

function render() {
  let filtered = employees
    .filter(emp =>
      (currentFilters.name === '' || emp.firstName.toLowerCase().includes(currentFilters.name)) &&
      (currentFilters.dept === '' || emp.department.toLowerCase().includes(currentFilters.dept)) &&
      (currentFilters.role === '' || emp.role.toLowerCase().includes(currentFilters.role))
    )
    .filter(emp =>
      emp.firstName.toLowerCase().includes(currentSearch) || emp.lastName.toLowerCase().includes(currentSearch) || emp.email.toLowerCase().includes(currentSearch)
    );

  if(currentSort) filtered.sort((a,b)=>a[currentSort].localeCompare(b[currentSort]));

  const totalPages = Math.ceil(filtered.length/pageSize);
  if(currentPage>totalPages) currentPage=totalPages||1;
  const start = (currentPage-1)*pageSize;
  const paginated = filtered.slice(start, start+pageSize);

  const list = document.getElementById('employee-list');
  list.innerHTML = '';
  paginated.forEach(emp => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <b>${emp.firstName} ${emp.lastName}</b><br>
      Email: ${emp.email}<br>
      Dept: ${emp.department}<br>
      Role: ${emp.role}<br>
      <button onclick="editEmployee(${emp.id})">Edit</button>
      <button onclick="deleteEmployee(${emp.id})">Delete</button>
    `;
    list.appendChild(card);
  });

  renderPagination(totalPages);
}

function renderPagination(total) {
  const container = document.getElementById('pagination');
  container.innerHTML = '';
  for(let i=1;i<=total;i++){
    const btn = document.createElement('button');
    btn.textContent=i;
    if(i===currentPage) btn.disabled=true;
    btn.onclick=()=>{currentPage=i;render();}
    container.appendChild(btn);
  }
}

function showForm(id=null) {
  editingId=id;
  document.getElementById('employee-modal').classList.add('active');
  if(id!=null){
    const emp=employees.find(e=>e.id===id);
    document.getElementById('firstName').value=emp.firstName;
    document.getElementById('lastName').value=emp.lastName;
    document.getElementById('email').value=emp.email;
    document.getElementById('department').value=emp.department;
    document.getElementById('role').value=emp.role;
    document.getElementById('modal-title').innerText='Edit Employee';
  }else{
    ['firstName','lastName','email','department','role'].forEach(id=>document.getElementById(id).value='');
    document.getElementById('modal-title').innerText='Add Employee';
  }
}
function closeForm(){document.getElementById('employee-modal').classList.remove('active');}
function saveEmployee(){
  const f=document.getElementById('firstName').value.trim();
  const l=document.getElementById('lastName').value.trim();
  const e=document.getElementById('email').value.trim();
  const d=document.getElementById('department').value.trim();
  const r=document.getElementById('role').value.trim();
  if(!f||!l||!e||!d||!r){alert('All fields required');return;}
  if(editingId!=null){
    const emp=employees.find(emp=>emp.id===editingId);
    emp.firstName=f; emp.lastName=l; emp.email=e; emp.department=d; emp.role=r;
  }else{
    const newId=employees.length?Math.max(...employees.map(emp=>emp.id))+1:1;
    employees.push({id:newId,firstName:f,lastName:l,email:e,department:d,role:r});
  }
  closeForm();render();
}
function deleteEmployee(id){if(confirm('Delete?')){employees=employees.filter(emp=>emp.id!==id);render();}}
function toggleFilter(){document.getElementById('filter-panel').classList.toggle('active');}
function applyFilter(){
  currentFilters.name=document.getElementById('filter-name').value.trim().toLowerCase();
  currentFilters.dept=document.getElementById('filter-dept').value.trim().toLowerCase();
  currentFilters.role=document.getElementById('filter-role').value.trim().toLowerCase();
  currentPage=1;render();
}
function clearFilter(){
  currentFilters={name:'',dept:'',role:''};
  ['filter-name','filter-dept','filter-role'].forEach(id=>document.getElementById(id).value='');
  render();
}
function applySearch(){
  currentSearch=document.getElementById('search').value.trim().toLowerCase();
  currentPage=1;render();
}
function applySort(field){currentSort=field;render();}
function changePageSize(size){pageSize=parseInt(size);currentPage=1;render();}
render();

