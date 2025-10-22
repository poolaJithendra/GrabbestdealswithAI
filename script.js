// Mock data for demo
const mockDeals = [
  {
    id: 'boat-141',
    name: 'boAt Airdopes 141 Bluetooth TWS Earbuds',
    category: 'Wireless Earbuds',
    stores: [
      { 
        name: 'Amazon India', 
        price: 1299, 
        mrp: 4490, 
        rating: 4.2, 
        link: 'https://amzn.in/XXXXXX' 
      },
      { 
        name: 'Flipkart', 
        price: 1349, 
        mrp: 4490, 
        rating: 4.1, 
        link: 'https://fkrt.it/XXXXXX' 
      },
    ],
  },
  {
    id: 'noise-vs104',
    name: 'Noise Buds VS104',
    category: 'Wireless Earbuds',
    stores: [
      { 
        name: 'Amazon India', 
        price: 1199, 
        mrp: 3499, 
        rating: 4.0, 
        link: 'https://amzn.in/YYYYYY' 
      },
    ],
  },
];

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const query = document.getElementById('query').value.trim().toLowerCase();
  const budget = parseInt(document.getElementById('budget').value);
  
  // Filter deals
  const results = mockDeals.filter(deal => 
    deal.name.toLowerCase().includes(query) && 
    deal.stores.some(store => store.price <= budget)
  );
  
  // Render results
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  
  if (results.length === 0) {
    resultsDiv.innerHTML = '<p class="no-results">No deals found. Try adjusting your search or budget.</p>';
    return;
  }
  
  results.forEach(deal => {
    const card = document.createElement('div');
    card.className = 'deal-card';
    
    let tableRows = '';
    deal.stores.forEach(store => {
      const discount = Math.round(((store.mrp - store.price) / store.mrp) * 100);
      tableRows += `
        <tr>
          <td>${store.name}</td>
          <td class="price">₹${store.price}</td>
          <td class="discount">${discount}% off</td>
          <td class="rating">⭐ ${store.rating}</td>
          <td class="action"><a href="${store.link}" target="_blank">Check Price →</a></td>
        </tr>
      `;
    });
    
    card.innerHTML = `
      <h3>${deal.name}</h3>
      <div class="category">${deal.category}</div>
      <table class="price-table">
        <thead>
          <tr>
            <th>Store</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
    
    resultsDiv.appendChild(card);
  });
});

document.getElementById('alertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('alertEmail').value;
  const successMsg = document.getElementById('alertSuccess');
  
  // Simulate saving alert
  console.log('Alert set for:', email);
  
  successMsg.style.display = 'block';
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 3000);
  
  document.getElementById('alertEmail').value = '';
});
