import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

function ChatsPage(props) {
  const chatProps = useMultiChatLogic(
    "3a9b52bc-2ae2-483d-9d11-83c31b2d680b",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
}

export default ChatsPage;
