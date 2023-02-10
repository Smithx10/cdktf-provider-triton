// https://www.terraform.io/docs/providers/triton/r/fabric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of network
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#description Fabric#description}
  */
  readonly description?: string;
  /**
  * Gateway IP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#gateway Fabric#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#id Fabric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not a NAT zone is provisioned at the Gateway IP address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#internet_nat Fabric#internet_nat}
  */
  readonly internetNat?: boolean | cdktf.IResolvable;
  /**
  * Network name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#name Fabric#name}
  */
  readonly name: string;
  /**
  * Last assignable IP on the network
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#provision_end_ip Fabric#provision_end_ip}
  */
  readonly provisionEndIp: string;
  /**
  * First IP on the network that can be assigned
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#provision_start_ip Fabric#provision_start_ip}
  */
  readonly provisionStartIp: string;
  /**
  * List of IP addresses for DNS resolvers
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#resolvers Fabric#resolvers}
  */
  readonly resolvers?: string[];
  /**
  * Map of CIDR block to Gateway IP address
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#routes Fabric#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * CIDR formatted string describing network address space
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#subnet Fabric#subnet}
  */
  readonly subnet: string;
  /**
  * VLAN on which the network exists
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#vlan_id Fabric#vlan_id}
  */
  readonly vlanId: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/triton/r/fabric triton_fabric}
*/
export class Fabric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "triton_fabric";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/triton/r/fabric triton_fabric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricConfig
  */
  public constructor(scope: Construct, id: string, config: FabricConfig) {
    super(scope, id, {
      terraformResourceType: 'triton_fabric',
      terraformGeneratorMetadata: {
        providerName: 'triton',
        providerVersion: '0.8.2',
        providerVersionConstraint: '~> 0.8.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gateway = config.gateway;
    this._id = config.id;
    this._internetNat = config.internetNat;
    this._name = config.name;
    this._provisionEndIp = config.provisionEndIp;
    this._provisionStartIp = config.provisionStartIp;
    this._resolvers = config.resolvers;
    this._routes = config.routes;
    this._subnet = config.subnet;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fabric - computed: true, optional: false, required: false
  public get fabric() {
    return this.getBooleanAttribute('fabric');
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // internet_nat - computed: false, optional: true, required: false
  private _internetNat?: boolean | cdktf.IResolvable; 
  public get internetNat() {
    return this.getBooleanAttribute('internet_nat');
  }
  public set internetNat(value: boolean | cdktf.IResolvable) {
    this._internetNat = value;
  }
  public resetInternetNat() {
    this._internetNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetNatInput() {
    return this._internetNat;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provision_end_ip - computed: false, optional: false, required: true
  private _provisionEndIp?: string; 
  public get provisionEndIp() {
    return this.getStringAttribute('provision_end_ip');
  }
  public set provisionEndIp(value: string) {
    this._provisionEndIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionEndIpInput() {
    return this._provisionEndIp;
  }

  // provision_start_ip - computed: false, optional: false, required: true
  private _provisionStartIp?: string; 
  public get provisionStartIp() {
    return this.getStringAttribute('provision_start_ip');
  }
  public set provisionStartIp(value: string) {
    this._provisionStartIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionStartIpInput() {
    return this._provisionStartIp;
  }

  // public - computed: true, optional: false, required: false
  public get public() {
    return this.getBooleanAttribute('public');
  }

  // resolvers - computed: true, optional: true, required: false
  private _resolvers?: string[]; 
  public get resolvers() {
    return this.getListAttribute('resolvers');
  }
  public set resolvers(value: string[]) {
    this._resolvers = value;
  }
  public resetResolvers() {
    this._resolvers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolversInput() {
    return this._resolvers;
  }

  // routes - computed: true, optional: true, required: false
  private _routes?: { [key: string]: string }; 
  public get routes() {
    return this.getStringMapAttribute('routes');
  }
  public set routes(value: { [key: string]: string }) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      internet_nat: cdktf.booleanToTerraform(this._internetNat),
      name: cdktf.stringToTerraform(this._name),
      provision_end_ip: cdktf.stringToTerraform(this._provisionEndIp),
      provision_start_ip: cdktf.stringToTerraform(this._provisionStartIp),
      resolvers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resolvers),
      routes: cdktf.hashMapper(cdktf.stringToTerraform)(this._routes),
      subnet: cdktf.stringToTerraform(this._subnet),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }
}
