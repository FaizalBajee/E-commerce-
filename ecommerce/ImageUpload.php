<?php
/*  Update Images*/
public function uploadImage() {	
  if(!empty($_FILES['file_attachment']['name'])) {
    $res        = array();
    $name       = 'file_attachment';
    $imagePath 	= 'assets/upload/file_attachment';
    $temp       = explode(".",$_FILES['file_attachment']['name']);
    $extension 	= end($temp);
    $filenew 	= str_replace(
                    $_FILES['file_attachment']['name'],
                    $name,
                    $_FILES['file_attachment']['name']) . 
                    '_' . time() . '' . "." . $extension;  		
    $config['file_name']   = $filenew;
    $config['upload_path'] = $imagePath;
    $this->upload->initialize($config);
    $this->upload->set_allowed_types('*');
    $this->upload->set_filename($config['upload_path'],$filenew);
    if(!$this->upload->do_upload('file_attachment')) {
      $data = array('msg' => $this->upload->display_errors());
    } else {
      $data = $this->upload->data();	
      if(!empty($data['file_name'])){
        $res['image_url'] = 'assets/upload/file_attachment/' .
                            $data['file_name']; 
      }
      if (!empty($res)) {
	echo json_encode(
          array(
            "status" => 1,
            "data" => array(),
            "msg" => "upload successfully",
            "base_url" => base_url(),
            "count" => "0"
          )
        );
      }else{
	echo json_encode(
          array(
            "status" => 1,
            "data" => array(),
            "msg" => "not found",
            "base_url" => base_url(),
            "count" => "0"
          )
        );
      }
    }
  }
}
?>