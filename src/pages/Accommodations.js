import React from 'react'

const Component = () => (
  <div>
    <p>Phuket has a wide range of beautiful hotels and resorts to choose from.  We would like to recommend two here which are located close to our wedding venue and offer excellent amenities and service:</p>

    <h3>Renaissance Phuket Resort & Spa</h3>

    {/* <img src={require('../images/renaissance.jpg')} class="inline" /> */}
    {/* <img class="inline" /> */}

    <p>Hotel website:
    <a href="http://www.marriott.com/hotels/travel/hktbr-renaissance-phuket-resort-and-spa/">http://www.marriott.com/hotels/travel/hktbr-renaissance-phuket-resort-and-spa/</a></p>

    <p>Tripadvisor page:
    <a href="http://www.tripadvisor.co.uk/Hotel_Review-g1223683-d1634352-Reviews-Renaissance_Phuket_Resort_Spa-Mai_Khao_Phuket.html">http://www.tripadvisor.co.uk/Hotel_Review-g1223683-d1634352-Reviews-Renaissance_Phuket_Resort_Spa-Mai_Khao_Phuket.html</a></p>

    <p>Group rate (inclusive of tax &amp; surcharges): THB5800 (approximately £105 or HK$1390)</p>

    <p>Please contact <a href="{{pathFor 'contact'}}">Virginia</a> should you wish to make a booking utilising our group rate.</p>

    <h3>Pullman Phuket Arcadia Naithon Beach</h3>

    {/* <img src={require('../images/pullman.jpg')} class="inline" /> */}
    {/* <img class="inline" /> */}

    <p>Hotel website:
    <a href="http://www.pullmanphuketarcadia.com/">http://www.pullmanphuketarcadia.com/</a></p>

    <p>Tripadvisor page:
    <a href="http://www.tripadvisor.co.uk/Hotel_Review-g297937-d3217202-Reviews-Pullman_Phuket_Arcadia_Naithon_Beach-Thalang_District_Phuket.html">http://www.tripadvisor.co.uk/Hotel_Review-g297937-d3217202-Reviews-Pullman_Phuket_Arcadia_Naithon_Beach-Thalang_District_Phuket.html</a></p>

    <p>
      Group rate (inclusive of tax &amp; surcharges):<br />
      Deluxe room - THB5300 (approx. £95/HK$1270)<br />
      Grand Deluxe – THB5800 (approx. £105/HK$1390)<br />
      Ocean Room – THB 6800 (approx. £122/HK$1625)
    </p>

    <p>Please contact <a href="{{pathFor 'contact'}}">Virginia</a> should you wish to make a booking utilising our group rate.
    </p>

    <h3>Private Villas</h3>
    <p>
      There are also plenty of private villas and rental homes for short term hires in Phuket. You can look up the following websites:
    </p>
    <p><a href="http://www.homeaway.com">http://www.homeaway.com</a></p>
    <p><a href="http://www.airbnb.com">http://www.airbnb.com</a></p>
    <p><a href="http://www.ownersdirect.co.uk">http://www.ownersdirect.co.uk</a></p>
  </div>
)

export default Component
