"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client"
export function UpdateUserInfo() {
    const  onSubmit =async(e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
      await authClient.updateUser({
   name,
    image ,
})
    }
  return (
    <Modal  >
      <Button variant="secondary"> <FaEdit /> Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and your profile will be update.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                 
                  
                  <TextField className="w-full" name="image">
                    <Label>Profile Picture</Label>
                    <Input placeholder="your profile URL " type="url" />
                  </TextField>
                    <Modal.Footer>
             <Button  slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update profile</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}