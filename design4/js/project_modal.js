
function selectThumbnail(project_id, thumbnail_id, least_thumbnail_id, max_thumbnail_id){
  console.log(`${project_id}  ${thumbnail_id}  ${least_thumbnail_id}  ${max_thumbnail_id}`);
  var featured_thumbnail = document.getElementById(`featured_${project_id.toString()}`);
  var selected_thumbnail = document.getElementById(`thumbnail_${project_id.toString()}_${thumbnail_id.toString()}`);
  console.log(selected_thumbnail);
  for (var i = least_thumbnail_id; i < max_thumbnail_id; i++) {
    var element = document.getElementById(`thumbnail_${project_id.toString()}_${i.toString()}`);
    element.classList.remove("active");
  }
  selected_thumbnail.classList.add("active");
  featured_thumbnail.src = selected_thumbnail.src;
}


function openModal(id){
  var modal = document.getElementById(`project_${id.toString()}`);
  modal.classList.remove("hidden")
}

function closeModal(id){
  var modal = document.getElementById(`project_${id.toString()}`);
  modal.classList.add("hidden")

}

