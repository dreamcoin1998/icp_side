import React from 'react';
import { Button, Modal, Typography } from 'antd'
import './style.css'


const { Title, Paragraph, Text } = Typography;


class ProtocolButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textItems: [{
                title: "使用协议",
                reactNode: (
                    <Typography>
                        <Text strong>一、定义</Text>
                        <Paragraph>
                            平台，是指您当前所浏览的网站平台。
                        </Paragraph>
                        <Paragraph>
                            用户，包含注册用户和非注册用户，以下亦称为“您”。注册用户是指通过我们平台完成全部注册程序后，使用我们平台服务或我们网站资料的用户。非注册用户是指未进行注册、直接登录我们平台或通过其他网站进入我们平台直接或间接地使用我们平台服务或我们网站资料的用户。
                            协议方，本协议中协议双方合称“协议方”。
                        </Paragraph>
                        <Text strong>二、协议的效力</Text>
                        <Paragraph>
                            1.	在您按照注册页面提示填写信息、阅读并同意本协议完成全部注册程序后，您即受本协议的约束。
                        </Paragraph>
                        <Paragraph>
                            2.	本协议内容包括本协议正文《隐私政策》，所有我们已经发布的或将来可能发布的规则为本协议不可分割的组成部分，与本协议具有同等法律效力。除另行明确声明外，任何我司网站提供的服务（以下称为“我们平台服务”）均受本协议约束。您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用我们平台服务；如您继续访问和使用我们平台服务，即视为您已确知并完全同意本协议各项内容。
                        </Paragraph>
                        <Paragraph>
                            3.	我们有权根据国家法律法规的更新、产品和服务规则的调整需要不时地制订、修改本协议或各类规则，并提前以网站公示的方式进行公示。如您继续使用我们平台服务的，即表示您接受经修订的协议和规则。如发生有关争议时，以我们最新的相关协议和规则为准。
                        </Paragraph>
                        <Text strong>三、注册</Text>
                        <Paragraph>
                            1.	在您完成注册程序使用我们平台服务后，您应当是具备相应民事行为能力的自然人（十六周岁以上的未成年人，以自己的劳动收入为主要生活来源的，视为完全民事行为能力人）、法人或其他组织。若您不具备前述主体资格，则您及您的家长或法定监护人（以下统称"监护人"）应承担因此而导致的一切后果，且我们有权注销您的账户，并向您及您的监护人索偿。
                        </Paragraph>
                        <Paragraph>
                            2.	我们非常重视对青少年个人信息搜集和使用的安全性的保护。我们建议，任何未满18周岁的未成年人参加网上活动应事先取得其监护人可经查证的同意并遵守《全国青少年网络文明公约》。监护人应承担未成年人网络活动风险及保护未成年人相关网络隐私的首要责任。
                        </Paragraph>
                        <Paragraph>
                            3.	在您签署本协议，完成注册程序后，您应对您的用户名、登录密码的安全，以及对通过您的账户和密码实施的行为负责，因此所衍生的任何损失或损害，我们无法也不承担任何责任。除非有法律规定或行政司法机关的指令，且征得我们的同意，否则您的用户名、登录密码不得以任何方式转让、借用、赠与、继承（与账户相关的财产权益除外）(或)在第三方平台上进行展示或售卖。否则，由此给您（或我们、任何第三方）造成的一切损失，概由您自行承担（或者负责赔偿）。
                        </Paragraph>
                        <Paragraph>
                            4.	您在注册帐号或使用我们平台服务的过程中，应提供合法、真实、准确的个人资料，您填写的个人资料有变动的，应及时进行更新。如果因您提供的个人资料不合法、不真实、不准确的，您需承担因此引起的相应责任及后果，并且我们保留终止您使用我们各项服务的权利。
                        </Paragraph>
                        <Paragraph>
                            5.	您了解并同意遵守本协议条款，在通过我们平台完成注册程序之后，即可成为我们平台注册用户。
                        </Paragraph>
                        <Paragraph>
                            6.	您不得通过任何手段恶意注册我们网站帐号，包括但不限于以牟利、炒作、套现等为目的多个账号注册，您亦不得盗用其他用户帐号。
                        </Paragraph>
                        <Text strong>四、我们平台服务使用规范</Text>
                        <Paragraph>
                            1.	通过我们平台，您可以按照我们的规则发布纺织品原料相关信息。但所发布之信息不得含有如下内容：
                        </Paragraph>
                        <Paragraph>
                            1) 反对宪法所确定的基本原则，煽动抗拒、破坏宪法和法律、行政法规实施的；
                        </Paragraph>
                        <Paragraph>
                            2) 煽动危害国家安全、泄露国家秘密、颠覆国家政权，推翻社会主义制度的；
                        </Paragraph>
                        <Paragraph>
                            3) 煽动分裂国家、破坏国家统一、损害国家荣誉和民族利益的；
                        </Paragraph>
                        <Paragraph>
                            4) 煽动民族仇恨、民族歧视，破坏民族团结的；
                        </Paragraph>
                        <Paragraph>
                            5) 捏造或者歪曲事实，散布谣言，扰乱社会秩序的；
                        </Paragraph>
                        <Paragraph>
                            6) 进行政治宣传或破坏国家宗教政策、宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；
                        </Paragraph>
                        <Paragraph>
                            7) 公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；
                        </Paragraph>
                        <Paragraph>
                            8) 损害国家机关信誉的；
                        </Paragraph>
                        <Paragraph>
                            9) 其他违反宪法和法律法规的；
                        </Paragraph>
                        <Paragraph>
                            2.	在接受我们服务的过程中，您不得从事下列行为：
                        </Paragraph>
                        <Paragraph>
                            1) 在使用我们平台服务过程中实施的所有行为均遵守国家法律、法规等规范文件及我们平台各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保我们免于因此产生任何损失或增加费用。
                        </Paragraph>
                        <Paragraph>
                            2) 不发布国家禁止发布的信息，不发布涉嫌侵犯他人知识产权或其它合法权益的信息，不发布违背社会公共利益或公共道德、公序良俗的信息，不发布其它涉嫌违法或违反本协议及各类规则的信息。
                        </Paragraph>
                        <Paragraph>
                            3) 不对我们平台上的任何数据作商业性利用，包括但不限于在未经我们事先书面同意的情况下，以复制、传播等任何方式使用我们平台上展示的资料。
                        </Paragraph>
                        <Paragraph>
                            4) 不使用任何装置、软件或例行程序干预或试图干预我们平台的正常运作或正在我们平台上进行的任何活动。您不得采取任何将导致不合理的庞大数据负载加诸我们平台网络设备的行动。
                        </Paragraph>
                        <Paragraph>
                            3.	您同意，在发现本网站任何内容不符合法律规定，或不符合本用户协议规定的，您有义务及时通知我们。如果您发现您的个人信息被盗用、您的版权或者其他权利被侵害，请将此情况告知我们并同时提供如下信息和材料：
                        </Paragraph>
                        <Paragraph>
                            1) 侵犯您权利的信息的网址，编号或其他可以找到该信息的细节；
                        </Paragraph>
                        <Paragraph>
                            2) 您是所述的版权或者其他权利的合法拥有者的权利证明；
                        </Paragraph>
                        <Paragraph>
                            3) 您的联系方式，包括联系人用户名，地址，电话号码和电子邮件；
                        </Paragraph>
                        <Text strong>五、终止协议</Text>
                        <Paragraph>
                            1.	我们将在本平台公布并不时修订隐私权条款，隐私权条款构成本协议的有效组成部分。
                        </Paragraph>
                        <Paragraph>
                            2.	在您注销本平台账号时或后期不继续使用，我们将停止使用并删除您的信息。
                        </Paragraph>
                        <Paragraph>
                            3.	会员在本平台删除账号或后期不继续使用，注销账号时会员可以通过邮箱anna.chen@cloudyarn.cn联系我们，核对信息（您的用户名和绑定的手机号）确认此账号为本人操作使用后方可进行注销，我司承诺会在3个工作日内清除所有个人信息资料。
                        </Paragraph>
                    </Typography>
                ),
                isModalVisible: false
            },{
                title: "隐私政策",
                reactNode: (
                    <Typography>
                        <Paragraph>
                            本站（以下亦称“我们”）深知个人信息对您的重要性，我们尊重并保护所有使用我们平台服务的用户的个人信息，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。请在使用我们的产品（或服务）前，仔细阅读并了解本《我们隐私政策》（下称“本隐私政策”）。
                        </Paragraph>
                        <Text strong>一、我们处理个人信息的法律依据</Text>
                        <Paragraph>
                            本隐私政策制定的法律依据为《中华人民共和国消费者权益保护法》、《中华人民共和国网络安全法》、《中华人民共和国电子商务法》、《信息安全技术个人信息安全规范》以及其他涉及公民个人信息的相关法律法规。通常，我们会基于本隐私政策提示的功能收集您的个人信息。某些情况下，如果涉及其他信息的收集我们会单独向您出示个人信息保护说明条款。
                        </Paragraph>
                        <Text strong>二、本隐私政策的适用范围</Text>
                        <Paragraph>
                            本隐私政策适用于您使用本平台的产品或服务时使用。
                        </Paragraph>
                        <Text strong>三、我们如何收集和使用您的个人信息</Text>
                        <Paragraph>
                            个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
                        </Paragraph>
                        <Paragraph>
                            个人敏感信息是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。在您向我们提供任何属于敏感信息的个人信息前，请您清楚考虑提供是恰当的并且同意您的个人敏感信息可按本隐私政策所述的目的和方式进行处理。我们会在得到您的同意后收集和使用您的敏感信息以实现与我们业务相关的功能，并允许您对这些敏感信息的收集与使用做出不同意的选择，但是拒绝使用这些信息会影响您使用相关功能。
                        </Paragraph>
                        <Paragraph>
                            原则上，我们仅会出于本隐私政策所述的以下目的，收集和使用您的个人信息，如果超过以下目的收集和使用您的个人信息时我们会单独向您提示并征得您的同意。
                        </Paragraph>
                        <Paragraph>
                            （一）帮助您成为我们的注册\登录用户
                        </Paragraph>
                        <Paragraph>
                            您自行注册成为我们的用户
                        </Paragraph>
                        <Paragraph>
                            您在使用我们提供的服务时，首先需要成为我们的注册\登录用户。当您注册我们账户时，您需要向我们提供您准备使用的用户名及您本人的手机号码，当您的账户密码遗失时，可以通过注册手机号码发送的链接重置密码。
                        </Paragraph>
                        <Paragraph>
                            您可自行创建用户名，用户名的命名及使用应遵守相关法律法规并符合网络道德。用户名中不能含有任何侮辱、威胁、淫秽、谩骂等侵害他人合法权益的文字。用户名将作为您在平台上活动的标识，用以区别平台上其他用户。
                        </Paragraph>
                        <Paragraph>
                            您提供的上述信息，将在您使用我们服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除上述信息。
                        </Paragraph>
                        <Paragraph>
                            （二）客户服务
                        </Paragraph>
                        <Paragraph>
                            当您向我们申诉或进行咨询时，为了方便与您联系或帮助您解决问题，我们可能需要您提供用户名、手机号码信息。如您拒绝提供上述信息，可能部分功能无法使用，同时无法向您及时反馈申诉或咨询结果。
                        </Paragraph>
                        <Paragraph>
                            会员在本平台删除账号或后期不继续使用，注销账号时会员可以通过邮箱anna.chen@cloudyarn.cn联系我们，核对信息（您的用户名和绑定的手机号）确认此账号为本人操作使用后方可进行注销，我司承诺会在3个工作日内清除所有个人信息资料。
                        </Paragraph>
                        <Paragraph>
                            （三）征得授权同意的例外
                        </Paragraph>
                        <Paragraph>
                            根据相关法律法规的规定，在以下情形中，我们可以在不征得您的授权同意的情况下收集、使用一些必要的个人信息：
                        </Paragraph>
                        <Paragraph>
                            1.	与公共安全、公共卫生、重大公共利益直接相关的；
                        </Paragraph>
                        <Paragraph>
                            2.	出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
                        </Paragraph>
                        <Paragraph>
                            3.	您同意，在发现本网站任何内容不符合法律规定，或不符合本用户协议规定的，您有义务及时通知我们。如果您发现您的个人信息被盗用、您的版权或者其他权利被侵害，请将此情况告知我们并同时提供如下信息和材料：
                        </Paragraph>
                        <Text strong>四、我们如何保护您的个人信息</Text>
                        <Paragraph>
                            为保障您的信息安全，我们努力采取各种合理的物理、电子和管理方面的安全措施来保护您的信息，使您的信息不会被泄漏、毁损或者丢失，包括但不限于SSL、信息加密存储、数据中心的访问控制。
                        </Paragraph>
                        <Paragraph>
                            数据加密：我们对于用户的用户名、手机号进行加密存储，保证用户基本信息不会被恶意获取；
                        </Paragraph>
                        <Paragraph>
                            身份鉴别：我们通过校验账号密码或者账号绑定的手机号码，进行用户身份合法性鉴别，防止非经授权的介入；
                        </Paragraph>
                        <Paragraph>
                            1.	账号保护：您的账户均有安全保护功能，请妥善保管您的账户及密码信息。对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您理解，由于技术的限制以及可能存在的各种恶意手段，即便竭尽所能加强安全措施，在信息网络上也不存在“完善的安全措施”。如因您自己的原因导致账户及密码信息泄露而造成的任何法律后果需由您本人负责。
                        </Paragraph>
                        <Paragraph>
                            2.	互联网环境并非百分之百安全，我们将尽力确保或担保您发送给我们的任何信息的安全性。在不幸发生个人信息安全事件后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以手机短信的方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。
                        </Paragraph>
                        <Text strong>五、我们如何处理未成年人的个人信息</Text>
                        <Paragraph>
                            1.	我们的服务主要面向成年人（原则上18周岁以上为成年人，16周岁以上且以自己的劳动收入为主要生活来源的我们亦视为成年人）。若您是未成年人，在使用我们的产品和/或服务前，您应在监护人的陪同下阅读本隐私政策，并应确保已征得您的监护人同意后使用我们的服务并向我们提供您的信息。 我们会根据国家相关法律法规的规定着重保护未成年人的个人信息。
                        </Paragraph>
                        <Paragraph>
                            2.	如您的监护人不同意您按照本隐私政策使用我们的服务或向我们提供信息，请您立即终止使用我们的服务并及时通知我们。
                        </Paragraph>
                        <Paragraph>
                            3.	若您是未成年人的监护人，当您对您所监护的未成年人使用我们的服务或其向我们提供的用户信息有任何疑问时，请您及时与我们联系。我们将根据国家相关法律法规及本隐私政策的规定保护未成年人用户信息的保密性及安全性。如果我们发现自己在未事先获得可证实的父母或法定监护人同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。
                        </Paragraph>
                        <Text strong>六、本隐私政策的更新和通知</Text>
                        <Paragraph>
                            我们的隐私政策可能变更，未经您明确同意，我们不会削减您按照本隐私政策所应享有的权利，我们会在本页面上发布对本隐私政策所做的任何变更。
                        </Paragraph>
                        <Paragraph>
                            对于重大变更，我们还会提供更为显著的通知（包括对于某些服务， 我们会通过手机短信发送通知，说明隐私政策的具体变更内容）。
                        </Paragraph>
                        <Paragraph>
                            本隐私政策所指的重大变更包括但不限于：
                        </Paragraph>
                        <Paragraph>
                            1.	我们的服务模式发生重大变化，如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；
                        </Paragraph>
                        <Paragraph>
                            2.	我们在所有权结构、组织架构等方面发生重大变化，如业务调整、破产并购等引起的所有者变更等；
                        </Paragraph>
                        <Paragraph>
                            3.	个人信息共享、转让或公开披露的主要对象发生变化；
                        </Paragraph>
                        <Paragraph>
                            4.	您参与个人信息处理方面的权利及其行使方式发生重大变化；
                        </Paragraph>
                        <Paragraph>
                            5.	我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时。
                        </Paragraph>
                    </Typography>
                ),
                isModalVisible: false
            }]
        }
    }
    
    showModal(index) {
        const reactItems = this.state.textItems;
        reactItems[index].isModalVisible = true;
        this.setState({
            textItems: reactItems
        })
    }

    handleCancel(index) {
        const reactItems = this.state.textItems;
        reactItems[index].isModalVisible = false;
        this.setState({
            textItems: reactItems
        })
    }

    render() {
        return (
            <>
                <Button style={this.props.style} type="text" onClick={this.showModal.bind(this, this.props.index)}>{this.state.textItems[this.props.index].title}</Button>
                <Modal 
                    title={this.state.textItems[0].title}  
                    visible={this.state.textItems[0].isModalVisible} 
                    footer={null} onCancel={this.handleCancel.bind(this, 0)} 
                    bodyStyle={{ height: "500px", overflowY: 'auto' }}
                    width={1000}
                > 
                    {this.state.textItems[0].reactNode}
                </Modal>
                <Modal 
                    title={this.state.textItems[1].title} 
                    visible={this.state.textItems[1].isModalVisible} 
                    footer={null} onCancel={this.handleCancel.bind(this, 1)} 
                    bodyStyle={{ height: "500px", overflowY: 'auto' }}
                    width={1000}
                > 
                    {this.state.textItems[1].reactNode}
                </Modal>
            </>
        );
    }

}

export {
    ProtocolButton
}
