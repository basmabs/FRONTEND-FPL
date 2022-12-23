import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import SondageServices from "../Services/Sondage";
import SondageProgress from "./SondageInc";
function ListSondage() {
  const [Sondage, setSondage] = useState([])
  const getData = async () => {
    const data = await SondageServices.getSondage()
    setSondage(data.data)
  };
    const supprimer = async (id) => {
      try {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-info',
            cancelButton: 'btn btn-secondary me-5'
          },
          buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then(async (result) => {
          if (result.isConfirmed) {
            const response = await SondageServices.deleteSondage(id)
            getData();
            toast.success(response.data.message);
          }
        })
      }
      catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getData()
    }, [])

    return (
      <div className="card mx-auto w-50 mt-5">
        <div className="card-header text-center">

          <Link to="/addSondage" className='btn btn-primary' id="add">Add sondages</Link>
          <h3>Sondages</h3>
        </div>
        <div className="card-body">
          <table className='table table-striped'>
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Subject title</th>
                <th>Description</th>
                <th>Personal Vote</th>
                <th>Vote</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {Sondage.map((sondage, index) => {
                return (
                  <tr key={sondage._id}>
                    <td>{index + 1}</td>
                    <td>{sondage.title}</td>
                    <td>{sondage.description}</td>
                    <td>{sondage.category}</td>

                    <td>
                      <div className="d-flex justify-content-around">
                        <Link to={`/updateSondage/${sondage._id}`} className='btn btn-success'>update</Link>
                        <button onClick={() => supprimer(sondage._id)} type='button' className='btn btn-danger'>delete</button>
                      </div><hr />
                      <div className='d-flex justify-content-around'>
                        <SondageProgress />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  };

  export default ListSondage

