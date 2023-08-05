import './AddContent.css';
const AddContent = () => {

    const formSubmitHandler = (event)=>{
        alert("form submitted");
        console.log(event);
        event.preventDefault();
    }

    return <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
        <form class="contact-form" onSubmit={formSubmitHandler} >
            <div class="row">
                <div class="col-md-3">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" required />
                </div>
                <div class="col-md-3">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required />
                </div>
                <div class="col-md-4">
                    <label for="message">Message:</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
}

export default AddContent;