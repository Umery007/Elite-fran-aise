import {
  Container,
  Overlay,
  Title,
  Form,
  Label,
  Input,
  Button,
  Links,
  LinkItem,
  Icon,
} from "./styles";

import fundo from "../../assets/contatoimg/Group.png";
import carta from "../../assets/contatoimg/carta.png";
import gps from "../../assets/contatoimg/gps.png";
import telefone from "../../assets/contatoimg/telefone.png";

export default function Contato() {
  return (
    <Container style={{ backgroundImage: `url(${fundo})` }}>
      <Overlay />

      <Title>signup</Title>

        <Form>
        <Label>Full Name</Label>
        <Input type="text" placeholder="type name" />

        <Label>G-mail</Label>
        <Input type="email" placeholder="type g-mail" />

        <Label>Password</Label>
        <Input type="password" placeholder="type password" />

        <Button>send message</Button>
      </Form>

      <Links>
        <LinkItem>
          <Icon src={carta} alt="email" />
          ContactoLelitefrancaise157@gmail.com
        </LinkItem>

        <LinkItem>
          <Icon src={telefone} alt="telefone" />
          81 67 94 38 20
        </LinkItem>

        <LinkItem>
          <Icon src={gps} alt="gps" />
          22 Rue de la Paix, 75002 Paris
        </LinkItem>
      </Links>
    </Container>
  );
}