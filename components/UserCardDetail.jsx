import { MailForward, MapPins } from "tabler-icons-react";

export default function UserCardDetail({ address, email }) {
  return (
    <div className="text-center">
      <p>
        <MailForward /> {email}
      </p>
      <p>
        <MapPins /> {address}
      </p>
    </div>
  );
}
