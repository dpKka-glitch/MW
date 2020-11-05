import React, { useState } from "react";
import { Tab, Nav, NavLink, Modal } from "react-bootstrap";
import { NavItem, Button } from "shards-react";
import Contacts from "./contacts";
import Conversations from "./conversations";
import NewConversation from "./nConversations";
import NewContact from "./nContact";
const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const conversationisOpen = activeKey === CONVERSATIONS_KEY;
  const [modalOpen, setmodalOpen] = useState(false);

  function CloseModal(s) {
    setmodalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <NavItem>
            <NavLink eventKey={CONVERSATIONS_KEY} href="#">
              Conversations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={CONTACTS_KEY} href="#">
              Contacts
            </NavLink>
          </NavItem>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="border-top border-right small">
          Your Id : <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setmodalOpen(true)} className="rounded-0">
          New {conversationisOpen ? "conversation" : "contact"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={() => CloseModal}>
        {conversationisOpen ? (
          <NewConversation closeModal={CloseModal} />
        ) : (
          <NewContact closeModal={CloseModal} />
        )}
      </Modal>
    </div>
  );
}
