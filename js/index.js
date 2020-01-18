//import 'jquery';

const ShoppingItem = ({ name }) => `
  <li>
    <p>${name}</p>
    <div class="button-container">
      <button class="check-button">Check</button>
      <button class="delete-button">Delete</button>
    </div>
  </li>
`;

function init() {
  const shoppingForm = $('#shoppingCartForm');
  const checklist = $('#checklist');
  const itemInput = $('#itemInput');

  $(shoppingForm).on('submit', event => {
    event.preventDefault();

    if ($(itemInput).val() !== "") {
      $(checklist).append(ShoppingItem({
        name: $(itemInput).val()
      }));
      
      var items = $(checklist).children('li').get();
      items.sort((a, b) => $(a).children('p').text().toLowerCase().localeCompare($(b).children('p').text().toLowerCase()));
  
      $(checklist).empty()
      $(checklist).append(items);
    
  
      $(itemInput).val('');
    }
  });

  $(checklist).on('click', '.check-button', event => {
    $(event.target).closest('li').children('p').toggleClass('crossed');
  })

  $(checklist).on('click', '.delete-button', event => {
    $(event.target).closest('li').remove();
  })
}

init();