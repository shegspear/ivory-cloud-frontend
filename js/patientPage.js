const createAppointmentModal = document.querySelector('#create-appointment-modal')

document.querySelector('#add-button').addEventListener('click', openModal)
document.querySelector('#close').addEventListener('click',closeModal)

document.querySelector('#create-appointment-form').addEventListener('submit', createAppointment)


function openModal() {
  createAppointmentModal.style.display = 'flex'
}
function closeModal() {
  createAppointmentModal.style.display = 'none'
}

function createAppointment(event) {
  event.preventDefault()
  const doctorName = event.target.doctorName.value
  const conditions = event.target.conditions.value
  const appointmentDate = new Date(event.target.appointmentDate.value)
  const email = event.target.email.value
  console.log(appointmentDate)

  const trString = `
    <td class="col-sm-3">
      <div class="p-avatar2">
      <span><img class="doctor-profile-pic" src="./assets/doctor-avatar/doc-avatar.jpg" alt="doctor picture"></span> 
      <span><p class="mx-2">${doctorName}</p></span>

  </div>
  </td>
  <td class="col">
      <p>${conditions}</p>
  </td>
  <td class="col">
    <p>${appointmentDate.toLocaleDateString()}</p>
  </td>
<td class="col">
  <p>${appointmentDate.toLocaleTimeString()}</p>
</td>
<td class="col">
    <p>Selena Stones</p>
  </td>
<td class="col-sm-3">
  <p>${email}</p>
</td>
  `

  const appointmentRow = document.createElement('tr')
  appointmentRow.className = 'd-flex'
  appointmentRow.innerHTML = trString

  document.querySelector('#table-body').appendChild(appointmentRow)


  closeModal()
}