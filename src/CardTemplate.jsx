function sendTicketAlert(e) {
    alert("Das Ticket wurde auf deine E-Mail gesendet."); e.preventDefault();
    console.log("huhuhuh");
  }

function CardTemplate({img, cardTitle}) {
    return (
        <>
            <div className="col-md-6 col-lg-3 movie">
                            <div className="card">
                              <img src={img} className="mb-3 card-img-top"/>
                                <div className="card-body text-center">
                                  <h3 className="card-title mb-3">{cardTitle}</h3>
                                  <div class="button-container">
                                    <a href="" class="btn btn-primary" onClick={e=>sendTicketAlert(e)}>Book now</a>
                                  </div>

                                  
                                </div>
                            </div>
                      </div>

        </>
    )
}

export default CardTemplate