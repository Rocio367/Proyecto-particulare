import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Respuestas, Tema } from 'src/app/shared/models/tema';
import Swal from 'sweetalert2';
import { ModalReporteComponent } from '../../components/modal-reporte/modal-reporte.component';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.scss']
})
export class ForoComponent implements OnInit {
  tema = new Tema();
  formRespuesta :FormGroup;
  selectedEstado:string;
  estados=[{name:'Que sigo',code:'1'},{name:'Creados por mi',code:'2'}]

  selectedOrder:string;
  orden=[{name:'Más recientes',code:'1'},{name:'Más antiguos',code:'2'},{name:'Con más likes',code:'3'}]
  
  formDatos = this.form.group({
    comentario: ['',Validators.required],
  
   
  });
  constructor(private _snackBar : MatSnackBar, private form: FormBuilder,public dialog: MatDialog){
  
  }
  ngOnInit(): void {
    this.tema.titulo = 'Matemáticas - Problemas de logaritmos';
    this.tema.descripcion = 'Este es un tema para aclarar dudas sobre problemas de logaritmos para un nivel universitario '
    this.tema.seguidores = 31;
    this.tema.fecha = new Date();
    this.tema.like = true;
    let resp1 = new Respuestas();
    resp1.text = 'Holaa alguien me podría ayudar con este logaritmo :  log4 2 = 0,5 y log4 3 = 0,7924 calcula log4 6 ?? ';
    resp1.avatar = 'https://i.pinimg.com/236x/b3/bc/1b/b3bc1baf429da3d6509431ea26768d39.jpg';
    resp1.user = 'Sofia Martinez';
    

    let r1 = new Respuestas();
    r1.text = 'Holaa, solo debés resolverlo así log4 6 = log4 (2 * 3) = log4 2 + log4 3 = 0,5 + 0,7924 = 1,2924 ';
    r1.avatar = 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg';
    r1.user = 'Micaela Cuello';

    let r2 = new Respuestas();
    r2.text = 'Muchas gracias!!';
    r2.avatar = 'https://i.pinimg.com/236x/b3/bc/1b/b3bc1baf429da3d6509431ea26768d39.jpg';
    r2.user = 'Sofia Martinez';

    resp1.respuestas.push(r1, r2)
    let resp2 = new Respuestas();
    resp2.text = 'Hola, qué tal? alguno podría explicarme calcular el siguiente ejercico :"Sabiendo que log4 6 = 1,2924 y log4 3 = 0,7925 calcula log3 6" ';
    resp2.avatar = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgaHBoaGhwcGhwcGhwaGBoaGRwaGhgeIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrISw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAEEQAAEDAgMEBwYDCAEDBQAAAAEAAhEDIQQSMQVBUWEGInGBkaGxEzJSwdHwI3LhFBZCYoKSovGyBxXSJEODwsP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQACAgICAgIDAQEAAAAAAAAAAQIRITEDEkFREzIiYYFxBP/aAAwDAQACEQMRAD8A6oFWNVQCkAvQo4ky4JyVUEkqHZaouUZSQkHYRTQnhNCdBZFSYLpQnaENWOLpmixqeoSBYKOHdIVsLzZ/jPJ7UGpQVAT2TfSfVZu12fhP7AfArZrCyy9pkGk/8p9F1RdwOHmilKmch0af12gcG/IInpg3r0zycPmg9guArDtjwePojemDw4UyNxcP8SkvqYP7G5scTSYeS0Q1Y/R/EfhMnTf5LpxSGqtSqKF8bk3QEGp3UwdfHeOwq4sunDFVmbVAuQjW44j5j5+imGooMUXUN4sfI93zSbKT9lIarGsUmi8EQfvQ71awJWWoplOVJE5QnU9kV8Zj5UoVriRuVefktozTRhKDi6IF4Cb2oUHXJTZVRBcKg5pGqOBVbQnRY6JGryS9pyUSEsqVjoXtTwCTXuKcBPKTbHFK8hlFxjVWyeKFo1NxRIXmc8ZKVs93hlFwXUpqibHuWbi2dR/5Xei1XOCFrizuYPouribUaZyf9STaZwmzbVm/mf6uWp0oZ1GHg71ELJw9qrfzO8wStzpY38IHg9vmUL6nI1+RZ0cM0G9rv+RXU4KrmbB1Fu7cuT6JXodjnDzldDRcWmR/sLRZiiLcZOjUyynbTT0zIDgr2hJuh0pMq9mk1qINO6Xs0lJBKD8FJYDqFA0SNLjz/X17UUGq1oTslGdbiPFOtGEkuzKtHNMrTqpuaCgWu4FWsqkapODi7idMeaM11kO9ihlV2cFMVrGVo5eTip4IBPlUgEoWl2ZNUNlTZVYE8pNAqIZUsqslJLI8CpslFMCDbVgwig6y4+ZNyo9X/mlFQbRU6xUKglSKWVdKicU5tnnT7VR+do8Q36ro+lLJw8/zMPmuc2i2K3/yM9Wj5LqOkd8K48A0+AWKeAazYN0KvSeODz6ArpAFzHQV3VrD+ef8Qupyq46Jlh2Tw1fIeIO5a1J4IkaFYjGGw3rRwOFeDOg3jj3bk2kT2DgFawlJrVIBQxqVESxTaxTa1SARYtkMqStSU2LqefwpNcQiMgKg6jwXSJP2M16sa5DlpCsZUUNGyki/Mna5RY8KzKE02RKKEU7SE4UhTBV9jFqiICcKXsQl+zjiUNgilzLolUupkGxlWZisJq5Wzu4ZpQaWxEJoU8ruSa41arTxg5pLJ53t9uWs7k9p/wA3fRdTttk4N/5B/wAQuY6WCKlQ9nq4/Nddi25sGfyD5BYrTLbpowugZ61dvNp8QfouxAXF9AHfi1xxZTP/ACXchq0joibyW4fEhtgweh8UbTxjTrIWdkUXN5oaJTNxjwdL9isaVytSoW6O+qVPbL26vJ7YP6qGmWlZ1jnQqv2rksOltxp95s8x9D9UfQxDH+64dht6rNtrZqophv7VySUPZjiElHcv40cgKT26GU7qxGrVd7UblD2h4Su2zj/0iMSw6pi1p0cnc8HVnkpNwbDxHeiwoqNI7ipseRqp/sBHuv8AH9EnYaoOB70rRaZY16m18FC5nNPWbCtZUBSbotQ7IOarA1DUqgG+UUx4PBHYzlxtFOJYYEBUNqcQj69PM22qB9mQbpSlSNeLj7Oi9gU4SpNVhhQpWg5I9XR5z00ZFR/NvoG/+S6jDUg7Bh3Fh+a57pw38U/kP/5/Qrc2U9xwNLKzNmZ1jMZRBk89yi9/0Grr+HOdBnxiHiYmmzyBXcFx3OPf+i802PWeys4sMPDBG/RwaRHeV2+DGKdlc94bMEjKLA7gEKaTo1fC3HvarRovc7n3EhQNZw3O/uRz6hjQHtj0VWc/C0dyrsc6QH+1O3snuUP2kb2f4/qjy9w3d8Kv2vIeCOxVAjqjDo0jsH0UQ7hnj73SrKlVs2DZTAu1kd36qWykQzHg/wAElPO7iU6m0VbGptO9XNaEMKnGVex8jTVdCZgkEYms15EXi12xbdvvvVbtO9MHRq0GwA1sOqBwurCBleeBPdolKk6Kp+SDah5KbK5VbXNkc1L2jQYkefqErJ6hIq8R81B1Bjv4R2iyzq+1msflDcwGpnTyvbsWq2uwj3ZPJTZXVrIG/BEe64kcCqjTeN/j9VsMI+AxzUnvYBLrDu396HP2Uu3sz6DqkGHA8lN+IkEPYJ4ghC9INp0MPRfWJMtAhhaWOcSYEAgOjmvIcf0xxVeesQ2bNa0EX0mZJ7yjsmOq2euNxTQYDxPDMJ8JWnQbLZLo7pXkuGxrixpLSHFrZ3Xi4g6XReE2++gZZmby1ae1uhSeStm105Z19Z6hv9/lWt0YfOBYIPuRM/yjdK5ra+2BimNfEOALXD+l5mNwXSdDHA4NhL41aBckwALAXKzbpZ/YVeDj9ht/9XB+Cpy914+i9LNTn4AfNeZ7MtjQL61RaSffJ0Gui9MwzGPY1wc51hIY0FzTAs4EyCo7JS/iNWr41+mwapi3zr99yoNZ/wAZ8VoOpNmCyroTfI3QtH/2UW0GfAe9w9Qr7oypGeXPP8fmVEsJ1f6ot5A91sdsx5Kl781jk7eujuwpA5Ywf6Te1AFh6q1uDB/9xv8AS159QiGbOZYBz3E7gyPUpOaKSA5qfA7wcktD/t9Q3itft+qSV/oVozG13E2kd4Wts5sxnE6mbeCx2MA598LSwD2giW2m91tJ4wZxtbNXGMDXXaA3LZw1MkekW7VSKdM55m94ujSxlVwMuBiMs2gTcc1dicIGtsudzNWrZi1m07Q3Qc/ryUajWHRnmR9Vdiac6mI3X3ygX0b+8Y71pGSfklxZkYhk1azYtDDYzujfrvWjRccreqJgb98ICuyKzxpNMHzI7jqtXBGWBtrSN24x8kdqZbjcaJse/wCHwCeniy5+YguDLNA0DiOse2CByvxRFORpBPb6WQ2DrOAcLDrHUnlwSc+3gFCvJgdN6vthRpvYS3O6oW8cjS0Tp1Zd4wFyuKwhBaGBjWgyQBw0gCF1PSjabA8Ne9rXhsc4N1y+0dpMY2XG50gSk3kaikjPxBe02iOX0tHmqqOMuRN94+oVD9rh2jHRxsEHjqIf12yHDx/RUnQmk9HQ4N4DtIDhDgOB4fRdp0IcWYeNHNe9sxuDiPBeXbJ2mQ4MqAkGwcNe/wC/qvVuhdRvs3zeHjfY2Bnv1UcjpDjG2csGlm0ABYipUA8yutNN5yvDy14tmbIsSTBG9t9Oa5ba5y7TceFZ/m2fmusGNptADqrAczfee0HWDYnkpbqSx4NI543+mSZjqmcNcSHw6Li4lt2k9iMoVa0yHOnmbeCxdp7ewvVBr0oE3Y8EixEggkgyhqfTjDs6pqh8aODHE/1dXXmncqwiHGF7Z1jcRWdBkXAJ4Em+4cwiWsqnUMHivNdq/wDUIezDKDnNdABdAaQBHuknf3LBw/TOuxxeKzyTEyZBI4g2AkmwhQ+PklnA+0Y4R7Z7N5sXN8J9VNrS0zmdO6I9NF5Q7/qW+B+FJi/XgTy6qz8d/wBQcQ9uVsMvq0mRY2Jm/wCgULh5Lu0PvA9no4pxaDndcA6s3hJeCfvXW+Pzf9Ulp8MvZHePo9QbiuS0cBihDiZEC29co/arQRcATBBmZ7u0bkTT2m28Qe8+Fwu2XC6umY3Lydoyq5tIPDmmTYRJBJ48NLId22C4AE7pJ56xG5c7S2iw03Swl9shJAAE3meXJDVMZE5cuUCRf+Hsn6rn+NOTs1laimbWJ2nP8TRpvE6KluLcdHrn37cZPVZO7idwHalidouGYNa5ttQ0RPKRG8qopLFEuqxZrVXk1QSZ6kd0mfUIjDYlzCcrokcBrEECRwjzXJ09ohhlz3uMRHAEza44InD47ObmN/8AHwGok+VkNx2iussJnTCuW3zkEb505qoVgXFxd72pm89neueqVGm7nvBdIjrG8EWG7/SLw2FLzAey/WgudpvDoFjcdhA4Ico7F0adMz+mOx3Pe2owA7nWGaQQARyhcztWjmIYTOQBs8YtK7NuKa59WmHS9j323AZiLctPFcdjKFUVDmykE68NN6hO5GqSUQKns08fNEPoBtpRTzAshQ691TDCAKeGgzAJJiOVyfJX1cU9mVrHva3WA9zRNzuMeSjicQ5mYiNCszD1S4nMZM5vKD8kIzk0lRfiK7nHM5xcSTJcTJP5jclDF2n36KTjfx5eZVXD/XmtEZjz6/dlEnVIu9VGUATaUpTBJAFm9IafcJt/2dyZun36JAWZuY8CkoyefgkkFnpmL2G5ries+f4ScrrfCDY/0uJ5LJqMYx0OBa7eHZpGpvv1K6vF9LadwW0+wvzf4gLKOObiJEUixtoeHtFwbAuJc3d7sTdZx5nLDNZcTirBKLKYpvqFjHNbBzFzjviA0c+MKhu3A12Z9IOaADHEG0EzoOHIa6qvbWHphoDKjYmQxrs5Ei+gGUDnyQGGwwq5GNcMxkQTBjSTIgCba9yuS9Gafs0v3ha9zQyiGXAJEcdXHKr6m189djSyAcgOWMrhMXBaDOqgzos5jPeDXggkFwhzTYSATYHfG9Ztd7GvHXaS2ILZyjK7fbrXtKjolop8j8nROexzCXsDXue0thpkNGrRw8e9TxNEljqjAxojMYEOhgEsA0EkG/1WbgXnEvDWNzEyXGXW8wtansvEBrxeBLMpyw4ddk+/NiTPdqsFxOMsM6HzNx0snO1scCWuewQ2SPdnvt9wnbtyXSGmId7zrNzR1gGxPZfXkhsds9zHBj8rS0NBDTOoABmdTE96pZhY626dZbaDwgldCj7OdzZvtxeV4AnM5oEloiXNBlx1N4Cxsex2e73uI3mw5wAigDctdnAygEaBzAJ33vF1OtialRstp3DROgAOh3748FMo07NYzct1/DIfUtvPah6taFPFU6w1ZHeD6IVtEz1tVSa8EsVe7TO9ChgBsN/3bRGVxaEM9hjQxPC3hoqSIlsocBPeefroqHcvrxRjsO8icjiJO4njuCFLSdxsTI1juCpEEMvqnyplJsJgIBO0a/JIBSy6/e9IBb0mi3h2pbwnbofvekAoPPxSTZBwHikmM6Q13OkOYINpzCY5QPvkuxbs3JhCHU2OhjTnkNeQDqDeTAPFc2Kc7uz9FvYOo/2YZkZBkE5ZLpm5mwsdRHzVS4qqjOPLezAdRb8J7yD5QpMwk6ATu0A8YsPquhGyibxblu/RE0dktHvWHE6Km4USnKzBxWxnsEVKdjpEOBnrXg2N/LeqDhKbDDnMYZggkSN9wDMLe24/DGiaXtxmEwGkvb4N/TnrC47DVACwgNHAvDchgSbFtxfTmsFXg1z5Om2LhGMrUyMmUPBMGBaRMHcJN0+2XvNZ7g9waXPDSHGMpMkBwtBN4Cxtm7KfiXQxz3CetlbYDf13ZWiQtrGdFsSxssLGM1MRI4A5ZJIHah1eykmzHOzs4yjM65drJkgCSSJOgTDYxc0C4a0kkkgXMTLo5CysdgKjOvVqEge6A5wc4g8CAQ3n4cRM4svYQTDt24QbWGmi1jC8kSktIHovZTY+MzxTEwAILiQIzm/PTcqdmbRdmdnMl47m7wGjcLlDjqui8EwZ3z5IUDyROFqghKnZuYp0hYlZkFFGqSFTGYrmUep0N2CVDdWUtAexQDJBPar2MiPBdHGY8hNhMzv0HabJVm5iQDIbAPN2gA71F85TlsQTHKbW/wAkdQphoY0aC/acq0vJmB1NhMcN4cbmD8jKAxOw3t9xwdyNiukL+tG+PAf7hKmASTxsO5OosVs4sVHszMIiQAQRPgVV7XkuxxuAbUBGUW3kb+UaLncRsSo09UAjtgrKTjdWaKMqugIPCk06qNXCvb7zCO6fMKoO+ylQF9klV7RJOgs7UbTpN35uxS/e7LZlIE8XGR4CFLBbNYykWOaHOJBzC0RGgO+xE80U7D0i7N7JghuUANGUCSbN0m5vqnJSlsmKjEz63SnEvsHhgMWYAI5ggSEGyjiargSHu5vMAd7zBXSNfGlhpZIOlT8SK7mdS2Y+wc9oHKfIAAIzA4FrBBh/CRYdglEJlS4o1RLm7DKeLcwQzqDg23enfVOXO8lxPugme8zuQ9BmYx3k8BvJT7Sfw0At2DRWopaRLk3sysZiXOJLjKzalRF1hMxEj04LNc5aWJDYqrmyO4SD2ps3WIVc2I/mHn/pMw9Z3afIwkMKY4DsVjWWMKiY5hW0nHdcLOXHeUaR5K2MykA2N6rrNIy95VzRJuZ5KrEul45BVGPVEyl2ZLCsmAeRPeXonEuylnbHiCAh8K/8TL/J5gz9UtrVOrANxcd0H5IYiftus8zpbvBKMpGBz0Haf1KwcFiczyCdXZh/UI++1bWFxAdBm1/KyylKkyoxth7RAgblBwTMepVDAXLbOwqqMG9ZmL2ZTfug8RqjQ+VIMWkWQ0mYP7un4x4fqnW7KSfZk9UFsKkXKoFIldRzItBVrCh2opjVLHQ5KYAmw1Uy1U1S4A5H5HbnQDHcdx07CixUGOOQZRcmC48Y3dgQmPqLNw20Xud7N7YeZu0y0wJMcLK/E1Nx1VJrwKn5AK7zxQGIfeRoiK71nYlyGwSLKbxJ7vLN9UsNx4yfFxQtN3UJ7fSVGli3ACwKTklsuMHLRqqAdFigjj3fCPNVOxjuA8/qhzRS4ZG1ScBeZKDe6X/fFCDGujRvn9VDD1nufYOdmaWw0SYO8DiDB7kvkTH8LWzRovio07iQ3xkDzB8FDaT+sU2NrHOA4EOLmm7CyAHZo59YkzFtJKr2q/rlFkyjVGS+oWukWISwu0nskA75Hebg8iqcQ/VDKJZEjrMBtxrjDuq7mbHsK1/a57BefALutiYfJSbMyRJ77+WiwlFLJvCTeGG5ICrcYVzyhnlCKZHMkqklQrDwU8rPr7Tps/ik8Bfz0VjjXLcxY2iw6PrODB2gOgu/pBXQ2coex4Gv6eKhW2tSZq8E8G3P0WFicXhx79WriHfCweyp9he8FxHYwdqF/eB7bUKdOhzY2akc6ry5/wDaWqWM6d2JrFub2baLPjxDxTBH8rXXd/SHLExmPo3z16lc/DSHs6fYXvGZw7Gd656tVc9xe9znOOrnEuce1xuVAoA6TYm0s+Ip02UadNhc4nKC6oYY43qPJP8AblHJdRjaQOoXI9DGTiHO+Fjo7SQPSV1GIqSVhP7YOjjX4mRicLe333rHxzIB4roK5nRYu0vdK1jJkSigOk23KIHfCM2BgmVc4eJhoLbkQTPDsQuHeIkkJtl7UNEuIaHZoBkxpP1V4TVhC6aWwvo/gG1Xuz+60AkAxJMxJ1ixWi3BYcFpe1jZOUsFTOL+6ddZjxWaNvEEOZTYzUOA/iBixgDghsbtLO0saxjGk5nZRdx5lNOKRTjOTvS/00cRs1lIVnvbmZYU7nVx5G+X5LULKdOo5jGEe0ZPUMGGkz1pBGo3rl8XtJ9RrWPcCG6QIkxEnn9VHF7QfUc0u1aIGUR9lJSS0DhJr8mbe2Gs/DMPa/MOq55c4NB3jM4DcsjaT+uVChRfIcQdQTPaqcY+SSi7yRNJJK7AK+neqQrsRuVQUvZITgqOeoxvEiezU+S9BptgLlOi+EzPLyLNsO0/fmure+AsZZdG3GsWQqFB1Xwrqr1nVqiaQ2L2iSHzpIIsr/eBzLUKdOh/MxuaoRzrPzP/ALcqyq1Vz3Fz3Oc46ucS5x7XG5VYSC2MRJSpCnxKg6q0aXQA8EpnQNSqw57rAHuVowobd7o5C58UX6A3OiVYZ3wP4R6n9F0D3rkdj4lraoDBEgiey66U1SdVlJZs3g/xoeoVj7UEsd2LUeVnY8dUoQSMGm07lNtPinAIMhE03tOtjzW1JmKk1orYxu9XDDsOkohtMJ/YKuqDvL2U0sEN5n73oqjhwNwTsaGqutiwE1FIUpSlstrvDWkncFgv56m6Je9zzLtAqBcyk3YIGxOoHJLC0HPcGNFyfsnkmq3cY3Lp+jGGYxuckF58Wjh81jJ0XFW6NjZ+EFJgaPHid5V1UqRdvQOLxMBZJWbvAPiqqy6tYJsTXJWRisRNhpvVpGTkE/8AcAksyUlVE9g52VupUHYngEZQ2M+M1Qim3i7XubqpnEUKXuNL3fE7Tub9SryQA08LUfeDHE2AVpoU2e87OeA08VVidoPfqYHAWHgEIjBQXVxxNmgNHJCucTqopJAH7FH4o7CurC5PYx/FHYfkupY5RI0jok96AxbrFE1XIDEvlJDkAuamgK5wVbnN3groOckwkaFW/tRVQYDpm/tTQwazPYgB3Oc7+JP7IC5P3yS/aGD3R4qh7s13OHy8EhjVH5rD3fVIjKEhWbuMqrE1ZGiTAfAuyvBib/XxR7q5zBwsRodLTMnt9JWpQ2APZtgw+JJNwSdRHfCGxmyX025pDjvgR4DwUKUXgtxksmjSxgLJB++azcTWzHkshuKLTINt/NPisZaG70nErtaI4vETYd6BKeUk1ghkZSSypIA0cYx7jJcXdpv4oAiNVtZVCpQa4XCpxFZjpkVWwZGlx5oUqaGJJJMgA7Y5/EHYfkuoauRwL8r2ntHkuqw9SQoZpF4FVCyq7SCQth1ws/HUJBjVCeRyVozXYmLC6kHvO8BC+3gwWBSGKHwrZSMKCQDxnvKmGu4T3/qhv20fB5qLse/cAE7QUEvoFDVmhuqqfiXHVx7rKklS2hpEvand5onAML6rBxcJ7Bc+iFAW70Yw0uc87uqO03PlHiok6RUVbOtpmAs/auKgQjc0LJx93FZRRvLRy2NbDu26GKvxvvuQ8LZHOxJikkgBZkkySAN1JJJaEDhCYxggmEySUtFIzSkkksxh2CYIcd8geK2MNuSSSZUQ5uiqqpJJM0Rg7SYM+moQSSStaMZbHTFOkmSRKQSSQUOuu6PiKTeZJSSUS0Xx/Y1X/JZeK3p0lMTSWjlcb77u1DFJJaeDB7HTJJIAZJJJAz//2Q==';
    resp2.user = 'Matias Espinosa';

    this.tema.respuesta.push(resp1,resp2)
   
  }

  verRespuestas(r: Respuestas){
      this.tema.respuesta[this.tema.respuesta.indexOf(r)].ver=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].ver;
  }
  responder(r: Respuestas){
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder;
    if(this.formDatos.valid) {
     // this._snackBar.open('El mensaje fue enviado correctamente', 'x');
      return true;
    } else {
      this.formDatos.markAllAsTouched();
    }
  }

  reportar(r: Respuestas){
    this.dialog.open(ModalReporteComponent, { panelClass: 'custom-dialog-container', data: 'user'});
  }
  like(t: Tema) {
    this.tema.like = !this.tema.like;
  }

  delete() {
    Swal.fire(
      'El tema fue eliminado correctamente',
      '',
      'success'
    )
  }

  responderForm(r: Respuestas) {
    r.text='@'+r.user+ ''+this.formRespuesta.get('text').value;
    r.user='Usuario actual'
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].respuestas.push(r);
    this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder=!this.tema.respuesta[this.tema.respuesta.indexOf(r)].aResponder;

    Swal.fire(
      'Gracias por responder!',
      '',
      'success'
    )
  }
}
