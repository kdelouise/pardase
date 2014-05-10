<div id="addPaymentProfile" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel">Payment Profile</h3>
  </div>

  <div id="modal-body">
 	 <div class="form payment_form">
		 <label><small>* Yellow Fields are required. </small></label>

		 <div class="input-group">
			 <span class="input-group-addon">Profile Name  </span>
			 <input type="text" placeholder="If no name is entered contact name will be used." class="form-control payment_name" >
		 </div>

		 <p>Cardholder Information</p>
		 <div class="input-group">
			 <span class="input-group-addon">First Name *</span>
			 <input type="text" class="form-control payment_firstname" >
		 </div>
		 <div class="input-group">
			 <span class="input-group-addon">Last Name *</span>
			 <input type="text" class="form-control payment_lastname">
		 </div>
		 <div class="input-group">
			 <span class="input-group-addon">Address 1 *</span>
			 <input type="text" class="form-control payment_address1" placeholder="123 East 45th Street">
		 </div>

		 <div class="input-group">
			 <span class="input-group-addon">Address 2</span>
			 <input type="text" class="form-control payment_address2" placeholder="Suite 5046">
		 </div>

		 <div class="input-group left">
			 <span class="input-group-addon">City *</span>
			 <input type="text" class="form-control payment_city" placeholder="New York">
		 </div>

		 <div class="input-group">
			 <span class="input-group-addon">State *</span>
			 <select class="form-control state_field">
				 <option>New York</option>
				 <option>Alaska</option>
				 <option>Arizona</option>
				 <option>Arkansas</option>
			 </select>
		 </div>

		 <div class="input-group left ">
			 <span class="input-group-addon">Zip *</span>
			 <input type="text" class="form-control postal_field postal code" placeholder="11206">
		 </div> 
		 <div class="input-group ">
			 <span class="input-group-addon">Country *</span>
			 <select class="form-control payment_country">
				 <option>United States</option>
				 <option>ABC</option>
				 <option>DEF</option>
				 <option>GHI</option>
				 <option>JKL</option>
			 </select>
		 </div>

	 </div>
	</div>



  <div class="modal-footer">
    <button class="btn cancelClick" data-dismiss="modal" aria-hidden="true">Cancel</button>
    <button class="btn btn-success" data-dismiss="modal" aria-hidden="true">Save</button>
  </div>
</div>


