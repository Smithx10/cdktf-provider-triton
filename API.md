# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTritonAccount <a name="DataTritonAccount" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/account triton_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer"></a>

```typescript
import { dataTritonAccount } from '@cdktf/provider-triton'

new dataTritonAccount.DataTritonAccount(scope: Construct, id: string, config?: DataTritonAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isConstruct"></a>

```typescript
import { dataTritonAccount } from '@cdktf/provider-triton'

dataTritonAccount.DataTritonAccount.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformElement"></a>

```typescript
import { dataTritonAccount } from '@cdktf/provider-triton'

dataTritonAccount.DataTritonAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformDataSource"></a>

```typescript
import { dataTritonAccount } from '@cdktf/provider-triton'

dataTritonAccount.DataTritonAccount.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.cnsEnabled">cnsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cnsEnabled`<sup>Required</sup> <a name="cnsEnabled" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.cnsEnabled"></a>

```typescript
public readonly cnsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonDatacenter <a name="DataTritonDatacenter" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/datacenter triton_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer"></a>

```typescript
import { dataTritonDatacenter } from '@cdktf/provider-triton'

new dataTritonDatacenter.DataTritonDatacenter(scope: Construct, id: string, config?: DataTritonDatacenterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isConstruct"></a>

```typescript
import { dataTritonDatacenter } from '@cdktf/provider-triton'

dataTritonDatacenter.DataTritonDatacenter.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformElement"></a>

```typescript
import { dataTritonDatacenter } from '@cdktf/provider-triton'

dataTritonDatacenter.DataTritonDatacenter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformDataSource"></a>

```typescript
import { dataTritonDatacenter } from '@cdktf/provider-triton'

dataTritonDatacenter.DataTritonDatacenter.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonFabricNetwork <a name="DataTritonFabricNetwork" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/fabric_network triton_fabric_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer"></a>

```typescript
import { dataTritonFabricNetwork } from '@cdktf/provider-triton'

new dataTritonFabricNetwork.DataTritonFabricNetwork(scope: Construct, id: string, config: DataTritonFabricNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isConstruct"></a>

```typescript
import { dataTritonFabricNetwork } from '@cdktf/provider-triton'

dataTritonFabricNetwork.DataTritonFabricNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformElement"></a>

```typescript
import { dataTritonFabricNetwork } from '@cdktf/provider-triton'

dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformDataSource"></a>

```typescript
import { dataTritonFabricNetwork } from '@cdktf/provider-triton'

dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.fabric">fabric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.internetNat">internetNat</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provisionEndIp">provisionEndIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provisionStartIp">provisionStartIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.resolvers">resolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.routes">routes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fabric`<sup>Required</sup> <a name="fabric" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.fabric"></a>

```typescript
public readonly fabric: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `internetNat`<sup>Required</sup> <a name="internetNat" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.internetNat"></a>

```typescript
public readonly internetNat: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `provisionEndIp`<sup>Required</sup> <a name="provisionEndIp" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provisionEndIp"></a>

```typescript
public readonly provisionEndIp: string;
```

- *Type:* string

---

##### `provisionStartIp`<sup>Required</sup> <a name="provisionStartIp" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.provisionStartIp"></a>

```typescript
public readonly provisionStartIp: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.resolvers"></a>

```typescript
public readonly resolvers: string[];
```

- *Type:* string[]

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.routes"></a>

```typescript
public readonly routes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonFabricVlan <a name="DataTritonFabricVlan" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan triton_fabric_vlan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer"></a>

```typescript
import { dataTritonFabricVlan } from '@cdktf/provider-triton'

new dataTritonFabricVlan.DataTritonFabricVlan(scope: Construct, id: string, config?: DataTritonFabricVlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetVlanId">resetVlanId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVlanId` <a name="resetVlanId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.resetVlanId"></a>

```typescript
public resetVlanId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isConstruct"></a>

```typescript
import { dataTritonFabricVlan } from '@cdktf/provider-triton'

dataTritonFabricVlan.DataTritonFabricVlan.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformElement"></a>

```typescript
import { dataTritonFabricVlan } from '@cdktf/provider-triton'

dataTritonFabricVlan.DataTritonFabricVlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformDataSource"></a>

```typescript
import { dataTritonFabricVlan } from '@cdktf/provider-triton'

dataTritonFabricVlan.DataTritonFabricVlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonImage <a name="DataTritonImage" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/image triton_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer"></a>

```typescript
import { dataTritonImage } from '@cdktf/provider-triton'

new dataTritonImage.DataTritonImage(scope: Construct, id: string, config?: DataTritonImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonImage.DataTritonImageConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetMostRecent">resetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOs">resetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetPublic">resetPublic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMostRecent` <a name="resetMostRecent" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetMostRecent"></a>

```typescript
public resetMostRecent(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOs` <a name="resetOs" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOs"></a>

```typescript
public resetOs(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetPublic` <a name="resetPublic" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetPublic"></a>

```typescript
public resetPublic(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetState"></a>

```typescript
public resetState(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isConstruct"></a>

```typescript
import { dataTritonImage } from '@cdktf/provider-triton'

dataTritonImage.DataTritonImage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformElement"></a>

```typescript
import { dataTritonImage } from '@cdktf/provider-triton'

dataTritonImage.DataTritonImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformDataSource"></a>

```typescript
import { dataTritonImage } from '@cdktf/provider-triton'

dataTritonImage.DataTritonImage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.mostRecentInput">mostRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.osInput">osInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.publicInput">publicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.os">os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mostRecentInput`<sup>Optional</sup> <a name="mostRecentInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.mostRecentInput"></a>

```typescript
public readonly mostRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.osInput"></a>

```typescript
public readonly osInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `publicInput`<sup>Optional</sup> <a name="publicInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.publicInput"></a>

```typescript
public readonly publicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mostRecent`<sup>Required</sup> <a name="mostRecent" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonImage.DataTritonImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonNetwork <a name="DataTritonNetwork" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/network triton_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer"></a>

```typescript
import { dataTritonNetwork } from '@cdktf/provider-triton'

new dataTritonNetwork.DataTritonNetwork(scope: Construct, id: string, config: DataTritonNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isConstruct"></a>

```typescript
import { dataTritonNetwork } from '@cdktf/provider-triton'

dataTritonNetwork.DataTritonNetwork.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformElement"></a>

```typescript
import { dataTritonNetwork } from '@cdktf/provider-triton'

dataTritonNetwork.DataTritonNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformDataSource"></a>

```typescript
import { dataTritonNetwork } from '@cdktf/provider-triton'

dataTritonNetwork.DataTritonNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.fabric">fabric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `fabric`<sup>Required</sup> <a name="fabric" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.fabric"></a>

```typescript
public readonly fabric: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonPackage <a name="DataTritonPackage" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/package triton_package}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

new dataTritonPackage.DataTritonPackage(scope: Construct, id: string, config: DataTritonPackageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataTritonPackageFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isConstruct"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

dataTritonPackage.DataTritonPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformElement"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

dataTritonPackage.DataTritonPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformDataSource"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

dataTritonPackage.DataTritonPackage.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.filter">filter</a></code> | <code>@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.lwps">lwps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.swap">swap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.filter"></a>

```typescript
public readonly filter: DataTritonPackageFilterList;
```

- *Type:* @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `lwps`<sup>Required</sup> <a name="lwps" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.lwps"></a>

```typescript
public readonly lwps: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `swap`<sup>Required</sup> <a name="swap" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.swap"></a>

```typescript
public readonly swap: number;
```

- *Type:* number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataTritonPackageFilter[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### DataTritonVolume <a name="DataTritonVolume" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/d/volume triton_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer"></a>

```typescript
import { dataTritonVolume } from '@cdktf/provider-triton'

new dataTritonVolume.DataTritonVolume(scope: Construct, id: string, config?: DataTritonVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetFilesystemPath">resetFilesystemPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilesystemPath` <a name="resetFilesystemPath" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetFilesystemPath"></a>

```typescript
public resetFilesystemPath(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isConstruct"></a>

```typescript
import { dataTritonVolume } from '@cdktf/provider-triton'

dataTritonVolume.DataTritonVolume.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformElement"></a>

```typescript
import { dataTritonVolume } from '@cdktf/provider-triton'

dataTritonVolume.DataTritonVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformDataSource"></a>

```typescript
import { dataTritonVolume } from '@cdktf/provider-triton'

dataTritonVolume.DataTritonVolume.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.filesystemPathInput">filesystemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.filesystemPath">filesystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `filesystemPathInput`<sup>Optional</sup> <a name="filesystemPathInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.filesystemPathInput"></a>

```typescript
public readonly filesystemPathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `filesystemPath`<sup>Required</sup> <a name="filesystemPath" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.filesystemPath"></a>

```typescript
public readonly filesystemPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Fabric <a name="Fabric" id="@cdktf/provider-triton.fabric.Fabric"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/fabric triton_fabric}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.fabric.Fabric.Initializer"></a>

```typescript
import { fabric } from '@cdktf/provider-triton'

new fabric.Fabric(scope: Construct, id: string, config: FabricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.fabric.FabricConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.fabric.Fabric.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.fabric.FabricConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetGateway">resetGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetInternetNat">resetInternetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetResolvers">resetResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.resetRoutes">resetRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.fabric.Fabric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.fabric.Fabric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.fabric.Fabric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.fabric.Fabric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.fabric.Fabric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.fabric.Fabric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.fabric.Fabric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.fabric.Fabric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.fabric.Fabric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.fabric.Fabric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.fabric.Fabric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.fabric.Fabric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.fabric.Fabric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.fabric.Fabric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.fabric.Fabric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.fabric.Fabric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.fabric.Fabric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-triton.fabric.Fabric.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGateway` <a name="resetGateway" id="@cdktf/provider-triton.fabric.Fabric.resetGateway"></a>

```typescript
public resetGateway(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.fabric.Fabric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternetNat` <a name="resetInternetNat" id="@cdktf/provider-triton.fabric.Fabric.resetInternetNat"></a>

```typescript
public resetInternetNat(): void
```

##### `resetResolvers` <a name="resetResolvers" id="@cdktf/provider-triton.fabric.Fabric.resetResolvers"></a>

```typescript
public resetResolvers(): void
```

##### `resetRoutes` <a name="resetRoutes" id="@cdktf/provider-triton.fabric.Fabric.resetRoutes"></a>

```typescript
public resetRoutes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.fabric.Fabric.isConstruct"></a>

```typescript
import { fabric } from '@cdktf/provider-triton'

fabric.Fabric.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.fabric.Fabric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.fabric.Fabric.isTerraformElement"></a>

```typescript
import { fabric } from '@cdktf/provider-triton'

fabric.Fabric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.fabric.Fabric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.fabric.Fabric.isTerraformResource"></a>

```typescript
import { fabric } from '@cdktf/provider-triton'

fabric.Fabric.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.fabric.Fabric.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.fabric">fabric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.public">public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.internetNatInput">internetNatInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provisionEndIpInput">provisionEndIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provisionStartIpInput">provisionStartIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.resolversInput">resolversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.routesInput">routesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.subnetInput">subnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.internetNat">internetNat</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provisionEndIp">provisionEndIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.provisionStartIp">provisionStartIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.resolvers">resolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.routes">routes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.subnet">subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.fabric.Fabric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.fabric.Fabric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.fabric.Fabric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.fabric.Fabric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.fabric.Fabric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.fabric.Fabric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.fabric.Fabric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.fabric.Fabric.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.fabric.Fabric.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.fabric.Fabric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.fabric.Fabric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.fabric.Fabric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.fabric.Fabric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.fabric.Fabric.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fabric`<sup>Required</sup> <a name="fabric" id="@cdktf/provider-triton.fabric.Fabric.property.fabric"></a>

```typescript
public readonly fabric: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-triton.fabric.Fabric.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-triton.fabric.Fabric.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-triton.fabric.Fabric.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.fabric.Fabric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internetNatInput`<sup>Optional</sup> <a name="internetNatInput" id="@cdktf/provider-triton.fabric.Fabric.property.internetNatInput"></a>

```typescript
public readonly internetNatInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.fabric.Fabric.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `provisionEndIpInput`<sup>Optional</sup> <a name="provisionEndIpInput" id="@cdktf/provider-triton.fabric.Fabric.property.provisionEndIpInput"></a>

```typescript
public readonly provisionEndIpInput: string;
```

- *Type:* string

---

##### `provisionStartIpInput`<sup>Optional</sup> <a name="provisionStartIpInput" id="@cdktf/provider-triton.fabric.Fabric.property.provisionStartIpInput"></a>

```typescript
public readonly provisionStartIpInput: string;
```

- *Type:* string

---

##### `resolversInput`<sup>Optional</sup> <a name="resolversInput" id="@cdktf/provider-triton.fabric.Fabric.property.resolversInput"></a>

```typescript
public readonly resolversInput: string[];
```

- *Type:* string[]

---

##### `routesInput`<sup>Optional</sup> <a name="routesInput" id="@cdktf/provider-triton.fabric.Fabric.property.routesInput"></a>

```typescript
public readonly routesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subnetInput`<sup>Optional</sup> <a name="subnetInput" id="@cdktf/provider-triton.fabric.Fabric.property.subnetInput"></a>

```typescript
public readonly subnetInput: string;
```

- *Type:* string

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-triton.fabric.Fabric.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-triton.fabric.Fabric.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-triton.fabric.Fabric.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.fabric.Fabric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetNat`<sup>Required</sup> <a name="internetNat" id="@cdktf/provider-triton.fabric.Fabric.property.internetNat"></a>

```typescript
public readonly internetNat: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.fabric.Fabric.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisionEndIp`<sup>Required</sup> <a name="provisionEndIp" id="@cdktf/provider-triton.fabric.Fabric.property.provisionEndIp"></a>

```typescript
public readonly provisionEndIp: string;
```

- *Type:* string

---

##### `provisionStartIp`<sup>Required</sup> <a name="provisionStartIp" id="@cdktf/provider-triton.fabric.Fabric.property.provisionStartIp"></a>

```typescript
public readonly provisionStartIp: string;
```

- *Type:* string

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-triton.fabric.Fabric.property.resolvers"></a>

```typescript
public readonly resolvers: string[];
```

- *Type:* string[]

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-triton.fabric.Fabric.property.routes"></a>

```typescript
public readonly routes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-triton.fabric.Fabric.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.fabric.Fabric.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.Fabric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.fabric.Fabric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### FirewallRule <a name="FirewallRule" id="@cdktf/provider-triton.firewallRule.FirewallRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule triton_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.firewallRule.FirewallRule.Initializer"></a>

```typescript
import { firewallRule } from '@cdktf/provider-triton'

new firewallRule.FirewallRule(scope: Construct, id: string, config: FirewallRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.firewallRule.FirewallRuleConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.firewallRule.FirewallRule.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.firewallRule.FirewallRuleConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.firewallRule.FirewallRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.firewallRule.FirewallRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.firewallRule.FirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.firewallRule.FirewallRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.firewallRule.FirewallRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.firewallRule.FirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.firewallRule.FirewallRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.firewallRule.FirewallRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.firewallRule.FirewallRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.firewallRule.FirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-triton.firewallRule.FirewallRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-triton.firewallRule.FirewallRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.firewallRule.FirewallRule.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.firewallRule.FirewallRule.isConstruct"></a>

```typescript
import { firewallRule } from '@cdktf/provider-triton'

firewallRule.FirewallRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.firewallRule.FirewallRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformElement"></a>

```typescript
import { firewallRule } from '@cdktf/provider-triton'

firewallRule.FirewallRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformResource"></a>

```typescript
import { firewallRule } from '@cdktf/provider-triton'

firewallRule.FirewallRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.firewallRule.FirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.global">global</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.rule">rule</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.global"></a>

```typescript
public readonly global: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.firewallRule.FirewallRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### InstanceTemplate <a name="InstanceTemplate" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/instance_template triton_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

new instanceTemplate.InstanceTemplate(scope: Construct, id: string, config: InstanceTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetFirewallEnabled">resetFirewallEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetUserdata">resetUserdata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: InstanceTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts

---

##### `resetFirewallEnabled` <a name="resetFirewallEnabled" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetFirewallEnabled"></a>

```typescript
public resetFirewallEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserdata` <a name="resetUserdata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.resetUserdata"></a>

```typescript
public resetUserdata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isConstruct"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

instanceTemplate.InstanceTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformElement"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

instanceTemplate.InstanceTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformResource"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

instanceTemplate.InstanceTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.firewallEnabledInput">firewallEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.networksInput">networksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.userdataInput">userdataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.firewallEnabled">firewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.userdata">userdata</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: InstanceTemplateTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference

---

##### `firewallEnabledInput`<sup>Optional</sup> <a name="firewallEnabledInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.firewallEnabledInput"></a>

```typescript
public readonly firewallEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.networksInput"></a>

```typescript
public readonly networksInput: string[];
```

- *Type:* string[]

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: InstanceTemplateTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts | cdktf.IResolvable

---

##### `userdataInput`<sup>Optional</sup> <a name="userdataInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.userdataInput"></a>

```typescript
public readonly userdataInput: string;
```

- *Type:* string

---

##### `firewallEnabled`<sup>Required</sup> <a name="firewallEnabled" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.firewallEnabled"></a>

```typescript
public readonly firewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `userdata`<sup>Required</sup> <a name="userdata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.userdata"></a>

```typescript
public readonly userdata: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Key <a name="Key" id="@cdktf/provider-triton.key.Key"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/key triton_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.key.Key.Initializer"></a>

```typescript
import { key } from '@cdktf/provider-triton'

new key.Key(scope: Construct, id: string, config: KeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.Key.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.key.Key.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.key.Key.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.key.KeyConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.key.Key.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.key.Key.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.key.Key.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.key.KeyConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.key.Key.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.key.Key.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.key.Key.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.key.Key.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.key.Key.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.key.Key.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.key.Key.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.key.Key.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.key.Key.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.key.Key.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.key.Key.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.key.Key.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.key.Key.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.key.Key.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.key.Key.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.key.Key.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.key.Key.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.key.Key.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.key.Key.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.key.Key.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.key.Key.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.key.Key.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.key.Key.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.key.Key.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.Key.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.key.Key.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.key.Key.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.key.KeyTimeouts

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.key.Key.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.key.Key.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.key.Key.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.key.Key.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.key.Key.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.key.Key.isConstruct"></a>

```typescript
import { key } from '@cdktf/provider-triton'

key.Key.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.key.Key.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.key.Key.isTerraformElement"></a>

```typescript
import { key } from '@cdktf/provider-triton'

key.Key.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.key.Key.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.key.Key.isTerraformResource"></a>

```typescript
import { key } from '@cdktf/provider-triton'

key.Key.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.key.Key.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.Key.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.key.Key.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.key.KeyTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.key.KeyTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.Key.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.key.Key.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.key.Key.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.key.Key.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.key.Key.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.key.Key.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.key.Key.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.key.Key.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.key.Key.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.key.Key.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.key.Key.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.key.Key.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.key.Key.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.key.Key.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.key.Key.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.key.Key.property.timeouts"></a>

```typescript
public readonly timeouts: KeyTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.key.KeyTimeoutsOutputReference

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.key.Key.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-triton.key.Key.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.key.Key.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.key.Key.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: KeyTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.key.KeyTimeouts | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.key.Key.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-triton.key.Key.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.key.Key.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.Key.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.key.Key.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Machine <a name="Machine" id="@cdktf/provider-triton.machine.Machine"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/machine triton_machine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.Machine.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.Machine(scope: Construct, id: string, config: MachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.Machine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.machine.MachineConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.machine.Machine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.machine.Machine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.machine.Machine.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.machine.MachineConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.Machine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.putCns">putCns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.putLocality">putLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetAdministratorPw">resetAdministratorPw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetAffinity">resetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetCloudConfig">resetCloudConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetCns">resetCns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetDelegateDataset">resetDelegateDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetFirewallEnabled">resetFirewallEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetNic">resetNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetRootAuthorizedKeys">resetRootAuthorizedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetUserScript">resetUserScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.Machine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.machine.Machine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.machine.Machine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.machine.Machine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.machine.Machine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.machine.Machine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.machine.Machine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.machine.Machine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.Machine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.Machine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.Machine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.Machine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.Machine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.Machine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.Machine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.Machine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCns` <a name="putCns" id="@cdktf/provider-triton.machine.Machine.putCns"></a>

```typescript
public putCns(value: MachineCns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.putCns.parameter.value"></a>

- *Type:* @cdktf/provider-triton.machine.MachineCns

---

##### `putLocality` <a name="putLocality" id="@cdktf/provider-triton.machine.Machine.putLocality"></a>

```typescript
public putLocality(value: MachineLocality): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.putLocality.parameter.value"></a>

- *Type:* @cdktf/provider-triton.machine.MachineLocality

---

##### `putNic` <a name="putNic" id="@cdktf/provider-triton.machine.Machine.putNic"></a>

```typescript
public putNic(value: IResolvable | MachineNic[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.putNic.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineNic[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.machine.Machine.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.machine.MachineTimeouts

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-triton.machine.Machine.putVolume"></a>

```typescript
public putVolume(value: IResolvable | MachineVolume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.machine.Machine.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineVolume[]

---

##### `resetAdministratorPw` <a name="resetAdministratorPw" id="@cdktf/provider-triton.machine.Machine.resetAdministratorPw"></a>

```typescript
public resetAdministratorPw(): void
```

##### `resetAffinity` <a name="resetAffinity" id="@cdktf/provider-triton.machine.Machine.resetAffinity"></a>

```typescript
public resetAffinity(): void
```

##### `resetCloudConfig` <a name="resetCloudConfig" id="@cdktf/provider-triton.machine.Machine.resetCloudConfig"></a>

```typescript
public resetCloudConfig(): void
```

##### `resetCns` <a name="resetCns" id="@cdktf/provider-triton.machine.Machine.resetCns"></a>

```typescript
public resetCns(): void
```

##### `resetDelegateDataset` <a name="resetDelegateDataset" id="@cdktf/provider-triton.machine.Machine.resetDelegateDataset"></a>

```typescript
public resetDelegateDataset(): void
```

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktf/provider-triton.machine.Machine.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetFirewallEnabled` <a name="resetFirewallEnabled" id="@cdktf/provider-triton.machine.Machine.resetFirewallEnabled"></a>

```typescript
public resetFirewallEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.machine.Machine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-triton.machine.Machine.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-triton.machine.Machine.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.machine.Machine.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-triton.machine.Machine.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetNic` <a name="resetNic" id="@cdktf/provider-triton.machine.Machine.resetNic"></a>

```typescript
public resetNic(): void
```

##### `resetRootAuthorizedKeys` <a name="resetRootAuthorizedKeys" id="@cdktf/provider-triton.machine.Machine.resetRootAuthorizedKeys"></a>

```typescript
public resetRootAuthorizedKeys(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-triton.machine.Machine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.machine.Machine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-triton.machine.Machine.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetUserScript` <a name="resetUserScript" id="@cdktf/provider-triton.machine.Machine.resetUserScript"></a>

```typescript
public resetUserScript(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktf/provider-triton.machine.Machine.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.Machine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.machine.Machine.isConstruct"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

machine.Machine.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.machine.Machine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.machine.Machine.isTerraformElement"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

machine.Machine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.machine.Machine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.machine.Machine.isTerraformResource"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

machine.Machine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.machine.Machine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.cns">cns</a></code> | <code>@cdktf/provider-triton.machine.MachineCnsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.computeNode">computeNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.locality">locality</a></code> | <code>@cdktf/provider-triton.machine.MachineLocalityOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.nic">nic</a></code> | <code>@cdktf/provider-triton.machine.MachineNicList</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.primaryip">primaryip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.machine.MachineTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.volume">volume</a></code> | <code>@cdktf/provider-triton.machine.MachineVolumeList</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.administratorPwInput">administratorPwInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.affinityInput">affinityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.cloudConfigInput">cloudConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.cnsInput">cnsInput</a></code> | <code>@cdktf/provider-triton.machine.MachineCns</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.delegateDatasetInput">delegateDatasetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.firewallEnabledInput">firewallEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.localityInput">localityInput</a></code> | <code>@cdktf/provider-triton.machine.MachineLocality</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.networksInput">networksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.nicInput">nicInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineNic[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.rootAuthorizedKeysInput">rootAuthorizedKeysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.machine.MachineTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.userScriptInput">userScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineVolume[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.administratorPw">administratorPw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.affinity">affinity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.cloudConfig">cloudConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.delegateDataset">delegateDataset</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.firewallEnabled">firewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.rootAuthorizedKeys">rootAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.userScript">userScript</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.machine.Machine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.machine.Machine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.Machine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.machine.Machine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.machine.Machine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.machine.Machine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.machine.Machine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.machine.Machine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.machine.Machine.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.machine.Machine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.machine.Machine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.machine.Machine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.machine.Machine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.machine.Machine.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cns`<sup>Required</sup> <a name="cns" id="@cdktf/provider-triton.machine.Machine.property.cns"></a>

```typescript
public readonly cns: MachineCnsOutputReference;
```

- *Type:* @cdktf/provider-triton.machine.MachineCnsOutputReference

---

##### `computeNode`<sup>Required</sup> <a name="computeNode" id="@cdktf/provider-triton.machine.Machine.property.computeNode"></a>

```typescript
public readonly computeNode: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-triton.machine.Machine.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-triton.machine.Machine.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-triton.machine.Machine.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-triton.machine.Machine.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-triton.machine.Machine.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-triton.machine.Machine.property.locality"></a>

```typescript
public readonly locality: MachineLocalityOutputReference;
```

- *Type:* @cdktf/provider-triton.machine.MachineLocalityOutputReference

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-triton.machine.Machine.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-triton.machine.Machine.property.nic"></a>

```typescript
public readonly nic: MachineNicList;
```

- *Type:* @cdktf/provider-triton.machine.MachineNicList

---

##### `primaryip`<sup>Required</sup> <a name="primaryip" id="@cdktf/provider-triton.machine.Machine.property.primaryip"></a>

```typescript
public readonly primaryip: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.machine.Machine.property.timeouts"></a>

```typescript
public readonly timeouts: MachineTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.machine.MachineTimeoutsOutputReference

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-triton.machine.Machine.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-triton.machine.Machine.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-triton.machine.Machine.property.volume"></a>

```typescript
public readonly volume: MachineVolumeList;
```

- *Type:* @cdktf/provider-triton.machine.MachineVolumeList

---

##### `administratorPwInput`<sup>Optional</sup> <a name="administratorPwInput" id="@cdktf/provider-triton.machine.Machine.property.administratorPwInput"></a>

```typescript
public readonly administratorPwInput: string;
```

- *Type:* string

---

##### `affinityInput`<sup>Optional</sup> <a name="affinityInput" id="@cdktf/provider-triton.machine.Machine.property.affinityInput"></a>

```typescript
public readonly affinityInput: string[];
```

- *Type:* string[]

---

##### `cloudConfigInput`<sup>Optional</sup> <a name="cloudConfigInput" id="@cdktf/provider-triton.machine.Machine.property.cloudConfigInput"></a>

```typescript
public readonly cloudConfigInput: string;
```

- *Type:* string

---

##### `cnsInput`<sup>Optional</sup> <a name="cnsInput" id="@cdktf/provider-triton.machine.Machine.property.cnsInput"></a>

```typescript
public readonly cnsInput: MachineCns;
```

- *Type:* @cdktf/provider-triton.machine.MachineCns

---

##### `delegateDatasetInput`<sup>Optional</sup> <a name="delegateDatasetInput" id="@cdktf/provider-triton.machine.Machine.property.delegateDatasetInput"></a>

```typescript
public readonly delegateDatasetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktf/provider-triton.machine.Machine.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallEnabledInput`<sup>Optional</sup> <a name="firewallEnabledInput" id="@cdktf/provider-triton.machine.Machine.property.firewallEnabledInput"></a>

```typescript
public readonly firewallEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.machine.Machine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-triton.machine.Machine.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-triton.machine.Machine.property.localityInput"></a>

```typescript
public readonly localityInput: MachineLocality;
```

- *Type:* @cdktf/provider-triton.machine.MachineLocality

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-triton.machine.Machine.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.machine.Machine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-triton.machine.Machine.property.networksInput"></a>

```typescript
public readonly networksInput: string[];
```

- *Type:* string[]

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-triton.machine.Machine.property.nicInput"></a>

```typescript
public readonly nicInput: IResolvable | MachineNic[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineNic[]

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-triton.machine.Machine.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `rootAuthorizedKeysInput`<sup>Optional</sup> <a name="rootAuthorizedKeysInput" id="@cdktf/provider-triton.machine.Machine.property.rootAuthorizedKeysInput"></a>

```typescript
public readonly rootAuthorizedKeysInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-triton.machine.Machine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.machine.Machine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: MachineTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.machine.MachineTimeouts | cdktf.IResolvable

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-triton.machine.Machine.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `userScriptInput`<sup>Optional</sup> <a name="userScriptInput" id="@cdktf/provider-triton.machine.Machine.property.userScriptInput"></a>

```typescript
public readonly userScriptInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-triton.machine.Machine.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | MachineVolume[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineVolume[]

---

##### `administratorPw`<sup>Required</sup> <a name="administratorPw" id="@cdktf/provider-triton.machine.Machine.property.administratorPw"></a>

```typescript
public readonly administratorPw: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktf/provider-triton.machine.Machine.property.affinity"></a>

```typescript
public readonly affinity: string[];
```

- *Type:* string[]

---

##### `cloudConfig`<sup>Required</sup> <a name="cloudConfig" id="@cdktf/provider-triton.machine.Machine.property.cloudConfig"></a>

```typescript
public readonly cloudConfig: string;
```

- *Type:* string

---

##### `delegateDataset`<sup>Required</sup> <a name="delegateDataset" id="@cdktf/provider-triton.machine.Machine.property.delegateDataset"></a>

```typescript
public readonly delegateDataset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-triton.machine.Machine.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallEnabled`<sup>Required</sup> <a name="firewallEnabled" id="@cdktf/provider-triton.machine.Machine.property.firewallEnabled"></a>

```typescript
public readonly firewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.machine.Machine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-triton.machine.Machine.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-triton.machine.Machine.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.machine.Machine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-triton.machine.Machine.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-triton.machine.Machine.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `rootAuthorizedKeys`<sup>Required</sup> <a name="rootAuthorizedKeys" id="@cdktf/provider-triton.machine.Machine.property.rootAuthorizedKeys"></a>

```typescript
public readonly rootAuthorizedKeys: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-triton.machine.Machine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-triton.machine.Machine.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `userScript`<sup>Required</sup> <a name="userScript" id="@cdktf/provider-triton.machine.Machine.property.userScript"></a>

```typescript
public readonly userScript: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.Machine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.machine.Machine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### ServiceGroup <a name="ServiceGroup" id="@cdktf/provider-triton.serviceGroup.ServiceGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/service_group triton_service_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

new serviceGroup.ServiceGroup(scope: Construct, id: string, config: ServiceGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.serviceGroup.ServiceGroupConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts

---

##### `resetCapacity` <a name="resetCapacity" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isConstruct"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

serviceGroup.ServiceGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformElement"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

serviceGroup.ServiceGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformResource"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

serviceGroup.ServiceGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.template">template</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceGroupTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServiceGroupTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts | cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.serviceGroup.ServiceGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Snapshot <a name="Snapshot" id="@cdktf/provider-triton.snapshot.Snapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/snapshot triton_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.snapshot.Snapshot.Initializer"></a>

```typescript
import { snapshot } from '@cdktf/provider-triton'

new snapshot.Snapshot(scope: Construct, id: string, config: SnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.snapshot.SnapshotConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.snapshot.Snapshot.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.snapshot.SnapshotConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.snapshot.Snapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.snapshot.Snapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.snapshot.Snapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.snapshot.Snapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.snapshot.Snapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.snapshot.Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.snapshot.Snapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.snapshot.Snapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.snapshot.Snapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.snapshot.Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.snapshot.Snapshot.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.snapshot.Snapshot.isConstruct"></a>

```typescript
import { snapshot } from '@cdktf/provider-triton'

snapshot.Snapshot.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.snapshot.Snapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.snapshot.Snapshot.isTerraformElement"></a>

```typescript
import { snapshot } from '@cdktf/provider-triton'

snapshot.Snapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.snapshot.Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.snapshot.Snapshot.isTerraformResource"></a>

```typescript
import { snapshot } from '@cdktf/provider-triton'

snapshot.Snapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.snapshot.Snapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.machineIdInput">machineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.machineId">machineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.snapshot.Snapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.snapshot.Snapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.snapshot.Snapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.snapshot.Snapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.snapshot.Snapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.snapshot.Snapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.snapshot.Snapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.snapshot.Snapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.snapshot.Snapshot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.snapshot.Snapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.snapshot.Snapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.snapshot.Snapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.snapshot.Snapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.snapshot.Snapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-triton.snapshot.Snapshot.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.snapshot.Snapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `machineIdInput`<sup>Optional</sup> <a name="machineIdInput" id="@cdktf/provider-triton.snapshot.Snapshot.property.machineIdInput"></a>

```typescript
public readonly machineIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.snapshot.Snapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.snapshot.Snapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `machineId`<sup>Required</sup> <a name="machineId" id="@cdktf/provider-triton.snapshot.Snapshot.property.machineId"></a>

```typescript
public readonly machineId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.snapshot.Snapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.Snapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.snapshot.Snapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### TritonProvider <a name="TritonProvider" id="@cdktf/provider-triton.provider.TritonProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton triton}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.provider.TritonProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-triton'

new provider.TritonProvider(scope: Construct, id: string, config?: TritonProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.provider.TritonProviderConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.provider.TritonProvider.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.provider.TritonProviderConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetInsecureSkipTlsVerify">resetInsecureSkipTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetKeyMaterial">resetKeyMaterial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.provider.TritonProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.provider.TritonProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.provider.TritonProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.provider.TritonProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.provider.TritonProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.provider.TritonProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.provider.TritonProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.provider.TritonProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.provider.TritonProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-triton.provider.TritonProvider.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-triton.provider.TritonProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetInsecureSkipTlsVerify` <a name="resetInsecureSkipTlsVerify" id="@cdktf/provider-triton.provider.TritonProvider.resetInsecureSkipTlsVerify"></a>

```typescript
public resetInsecureSkipTlsVerify(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-triton.provider.TritonProvider.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyMaterial` <a name="resetKeyMaterial" id="@cdktf/provider-triton.provider.TritonProvider.resetKeyMaterial"></a>

```typescript
public resetKeyMaterial(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-triton.provider.TritonProvider.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-triton.provider.TritonProvider.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.provider.TritonProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-triton'

provider.TritonProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.provider.TritonProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.provider.TritonProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-triton'

provider.TritonProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.provider.TritonProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-triton.provider.TritonProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-triton'

provider.TritonProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.provider.TritonProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.insecureSkipTlsVerifyInput">insecureSkipTlsVerifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.keyMaterialInput">keyMaterialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.insecureSkipTlsVerify">insecureSkipTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.keyMaterial">keyMaterial</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.provider.TritonProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.provider.TritonProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.provider.TritonProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.provider.TritonProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-triton.provider.TritonProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.provider.TritonProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.provider.TritonProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-triton.provider.TritonProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-triton.provider.TritonProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-triton.provider.TritonProvider.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-triton.provider.TritonProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `insecureSkipTlsVerifyInput`<sup>Optional</sup> <a name="insecureSkipTlsVerifyInput" id="@cdktf/provider-triton.provider.TritonProvider.property.insecureSkipTlsVerifyInput"></a>

```typescript
public readonly insecureSkipTlsVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-triton.provider.TritonProvider.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyMaterialInput`<sup>Optional</sup> <a name="keyMaterialInput" id="@cdktf/provider-triton.provider.TritonProvider.property.keyMaterialInput"></a>

```typescript
public readonly keyMaterialInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-triton.provider.TritonProvider.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-triton.provider.TritonProvider.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-triton.provider.TritonProvider.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `insecureSkipTlsVerify`<sup>Optional</sup> <a name="insecureSkipTlsVerify" id="@cdktf/provider-triton.provider.TritonProvider.property.insecureSkipTlsVerify"></a>

```typescript
public readonly insecureSkipTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-triton.provider.TritonProvider.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-triton.provider.TritonProvider.property.keyMaterial"></a>

```typescript
public readonly keyMaterial: string;
```

- *Type:* string

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-triton.provider.TritonProvider.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-triton.provider.TritonProvider.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.provider.TritonProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Vlan <a name="Vlan" id="@cdktf/provider-triton.vlan.Vlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/vlan triton_vlan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.vlan.Vlan.Initializer"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

new vlan.Vlan(scope: Construct, id: string, config: VlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.vlan.VlanConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-triton.vlan.Vlan.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.vlan.VlanConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.vlan.Vlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.vlan.Vlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.vlan.Vlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.vlan.Vlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.vlan.Vlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.vlan.Vlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.vlan.Vlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.vlan.Vlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.vlan.Vlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.vlan.Vlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.vlan.Vlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.vlan.Vlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.vlan.Vlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.vlan.Vlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.vlan.Vlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.vlan.Vlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.Vlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.vlan.Vlan.putTimeouts"></a>

```typescript
public putTimeouts(value: VlanTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.vlan.Vlan.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.vlan.VlanTimeouts

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-triton.vlan.Vlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.vlan.Vlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.vlan.Vlan.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.vlan.Vlan.isConstruct"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

vlan.Vlan.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.vlan.Vlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.vlan.Vlan.isTerraformElement"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

vlan.Vlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.vlan.Vlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.vlan.Vlan.isTerraformResource"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

vlan.Vlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.vlan.Vlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.vlan.VlanTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.vlanIdInput">vlanIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.vlanId">vlanId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.vlan.Vlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.vlan.Vlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.vlan.Vlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.vlan.Vlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.vlan.Vlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.vlan.Vlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.vlan.Vlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.vlan.Vlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.vlan.Vlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.vlan.Vlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.vlan.Vlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.vlan.Vlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.vlan.Vlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.vlan.Vlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.vlan.Vlan.property.timeouts"></a>

```typescript
public readonly timeouts: VlanTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.vlan.VlanTimeoutsOutputReference

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-triton.vlan.Vlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.vlan.Vlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.vlan.Vlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.vlan.Vlan.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VlanTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.vlan.VlanTimeouts | cdktf.IResolvable

---

##### `vlanIdInput`<sup>Optional</sup> <a name="vlanIdInput" id="@cdktf/provider-triton.vlan.Vlan.property.vlanIdInput"></a>

```typescript
public readonly vlanIdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-triton.vlan.Vlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.vlan.Vlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.vlan.Vlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.vlan.Vlan.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.Vlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.vlan.Vlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### Volume <a name="Volume" id="@cdktf/provider-triton.volume.Volume"></a>

Represents a {@link https://www.terraform.io/docs/providers/triton/r/volume triton_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.volume.Volume.Initializer"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

new volume.Volume(scope: Construct, id: string, config?: VolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.Volume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-triton.volume.VolumeConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-triton.volume.Volume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.volume.Volume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-triton.volume.Volume.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-triton.volume.VolumeConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.Volume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetNetworks">resetNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.volume.Volume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-triton.volume.Volume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-triton.volume.Volume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.volume.Volume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-triton.volume.Volume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-triton.volume.Volume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-triton.volume.Volume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-triton.volume.Volume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-triton.volume.Volume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.volume.Volume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.volume.Volume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.volume.Volume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.volume.Volume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.volume.Volume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.volume.Volume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.volume.Volume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.Volume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-triton.volume.Volume.putTimeouts"></a>

```typescript
public putTimeouts(value: VolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-triton.volume.Volume.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-triton.volume.VolumeTimeouts

---

##### `resetId` <a name="resetId" id="@cdktf/provider-triton.volume.Volume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.volume.Volume.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworks` <a name="resetNetworks" id="@cdktf/provider-triton.volume.Volume.resetNetworks"></a>

```typescript
public resetNetworks(): void
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-triton.volume.Volume.resetSize"></a>

```typescript
public resetSize(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-triton.volume.Volume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-triton.volume.Volume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-triton.volume.Volume.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.Volume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-triton.volume.Volume.isConstruct"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

volume.Volume.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.volume.Volume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-triton.volume.Volume.isTerraformElement"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

volume.Volume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.volume.Volume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-triton.volume.Volume.isTerraformResource"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

volume.Volume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-triton.volume.Volume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.filesystemPath">filesystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.networksInput">networksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.timeoutsInput">timeoutsInput</a></code> | <code>@cdktf/provider-triton.volume.VolumeTimeouts \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-triton.volume.Volume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-triton.volume.Volume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.volume.Volume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-triton.volume.Volume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-triton.volume.Volume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-triton.volume.Volume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-triton.volume.Volume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.volume.Volume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.volume.Volume.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.volume.Volume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.volume.Volume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.volume.Volume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.volume.Volume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.volume.Volume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filesystemPath`<sup>Required</sup> <a name="filesystemPath" id="@cdktf/provider-triton.volume.Volume.property.filesystemPath"></a>

```typescript
public readonly filesystemPath: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-triton.volume.Volume.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-triton.volume.Volume.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-triton.volume.Volume.property.timeouts"></a>

```typescript
public readonly timeouts: VolumeTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-triton.volume.VolumeTimeoutsOutputReference

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-triton.volume.Volume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.volume.Volume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-triton.volume.Volume.property.networksInput"></a>

```typescript
public readonly networksInput: string[];
```

- *Type:* string[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-triton.volume.Volume.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-triton.volume.Volume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-triton.volume.Volume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VolumeTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.volume.VolumeTimeouts | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-triton.volume.Volume.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-triton.volume.Volume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.volume.Volume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-triton.volume.Volume.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-triton.volume.Volume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-triton.volume.Volume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-triton.volume.Volume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.Volume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-triton.volume.Volume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTritonAccountConfig <a name="DataTritonAccountConfig" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.Initializer"></a>

```typescript
import { dataTritonAccount } from '@cdktf/provider-triton'

const dataTritonAccountConfig: dataTritonAccount.DataTritonAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/account#id DataTritonAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonAccount.DataTritonAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/account#id DataTritonAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTritonDatacenterConfig <a name="DataTritonDatacenterConfig" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.Initializer"></a>

```typescript
import { dataTritonDatacenter } from '@cdktf/provider-triton'

const dataTritonDatacenterConfig: dataTritonDatacenter.DataTritonDatacenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/datacenter#id DataTritonDatacenter#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonDatacenter.DataTritonDatacenterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/datacenter#id DataTritonDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTritonFabricNetworkConfig <a name="DataTritonFabricNetworkConfig" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.Initializer"></a>

```typescript
import { dataTritonFabricNetwork } from '@cdktf/provider-triton'

const dataTritonFabricNetworkConfig: dataTritonFabricNetwork.DataTritonFabricNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#name DataTritonFabricNetwork#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.vlanId">vlanId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#vlan_id DataTritonFabricNetwork#vlan_id}. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#id DataTritonFabricNetwork#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#name DataTritonFabricNetwork#name}.

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#vlan_id DataTritonFabricNetwork#vlan_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricNetwork.DataTritonFabricNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_network#id DataTritonFabricNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTritonFabricVlanConfig <a name="DataTritonFabricVlanConfig" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.Initializer"></a>

```typescript
import { dataTritonFabricVlan } from '@cdktf/provider-triton'

const dataTritonFabricVlanConfig: dataTritonFabricVlan.DataTritonFabricVlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#description DataTritonFabricVlan#description}. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#id DataTritonFabricVlan#id}. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#name DataTritonFabricVlan#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.vlanId">vlanId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#vlan_id DataTritonFabricVlan#vlan_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#description DataTritonFabricVlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#id DataTritonFabricVlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#name DataTritonFabricVlan#name}.

---

##### `vlanId`<sup>Optional</sup> <a name="vlanId" id="@cdktf/provider-triton.dataTritonFabricVlan.DataTritonFabricVlanConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/fabric_vlan#vlan_id DataTritonFabricVlan#vlan_id}.

---

### DataTritonImageConfig <a name="DataTritonImageConfig" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.Initializer"></a>

```typescript
import { dataTritonImage } from '@cdktf/provider-triton'

const dataTritonImageConfig: dataTritonImage.DataTritonImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#id DataTritonImage#id}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.mostRecent">mostRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#most_recent DataTritonImage#most_recent}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#name DataTritonImage#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.os">os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#os DataTritonImage#os}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#owner DataTritonImage#owner}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.public">public</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#public DataTritonImage#public}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#state DataTritonImage#state}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#type DataTritonImage#type}. |
| <code><a href="#@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#version DataTritonImage#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#id DataTritonImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mostRecent`<sup>Optional</sup> <a name="mostRecent" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.mostRecent"></a>

```typescript
public readonly mostRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#most_recent DataTritonImage#most_recent}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#name DataTritonImage#name}.

---

##### `os`<sup>Optional</sup> <a name="os" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.os"></a>

```typescript
public readonly os: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#os DataTritonImage#os}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#owner DataTritonImage#owner}.

---

##### `public`<sup>Optional</sup> <a name="public" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.public"></a>

```typescript
public readonly public: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#public DataTritonImage#public}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#state DataTritonImage#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#type DataTritonImage#type}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-triton.dataTritonImage.DataTritonImageConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/image#version DataTritonImage#version}.

---

### DataTritonNetworkConfig <a name="DataTritonNetworkConfig" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.Initializer"></a>

```typescript
import { dataTritonNetwork } from '@cdktf/provider-triton'

const dataTritonNetworkConfig: dataTritonNetwork.DataTritonNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/network#name DataTritonNetwork#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/network#id DataTritonNetwork#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/network#name DataTritonNetwork#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonNetwork.DataTritonNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/network#id DataTritonNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTritonPackageConfig <a name="DataTritonPackageConfig" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.Initializer"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

const dataTritonPackageConfig: dataTritonPackage.DataTritonPackageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]</code> | filter block. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#id DataTritonPackage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataTritonPackageFilter[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#filter DataTritonPackage#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#id DataTritonPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTritonPackageFilter <a name="DataTritonPackageFilter" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.Initializer"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

const dataTritonPackageFilter: dataTritonPackage.DataTritonPackageFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.disk">disk</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#disk DataTritonPackage#disk}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#group DataTritonPackage#group}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.lwps">lwps</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#lwps DataTritonPackage#lwps}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.memory">memory</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#memory DataTritonPackage#memory}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#name DataTritonPackage#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.swap">swap</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#swap DataTritonPackage#swap}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.vcpus">vcpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#vcpus DataTritonPackage#vcpus}. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#version DataTritonPackage#version}. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#disk DataTritonPackage#disk}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#group DataTritonPackage#group}.

---

##### `lwps`<sup>Optional</sup> <a name="lwps" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.lwps"></a>

```typescript
public readonly lwps: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#lwps DataTritonPackage#lwps}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#memory DataTritonPackage#memory}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#name DataTritonPackage#name}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.swap"></a>

```typescript
public readonly swap: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#swap DataTritonPackage#swap}.

---

##### `vcpus`<sup>Optional</sup> <a name="vcpus" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#vcpus DataTritonPackage#vcpus}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/package#version DataTritonPackage#version}.

---

### DataTritonVolumeConfig <a name="DataTritonVolumeConfig" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.Initializer"></a>

```typescript
import { dataTritonVolume } from '@cdktf/provider-triton'

const dataTritonVolumeConfig: dataTritonVolume.DataTritonVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.filesystemPath">filesystemPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#filesystem_path DataTritonVolume#filesystem_path}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#id DataTritonVolume#id}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#name DataTritonVolume#name}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#size DataTritonVolume#size}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#state DataTritonVolume#state}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#tags DataTritonVolume#tags}. |
| <code><a href="#@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.type">type</a></code> | <code>string</code> | Type of volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filesystemPath`<sup>Optional</sup> <a name="filesystemPath" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.filesystemPath"></a>

```typescript
public readonly filesystemPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#filesystem_path DataTritonVolume#filesystem_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#id DataTritonVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#name DataTritonVolume#name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#size DataTritonVolume#size}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#state DataTritonVolume#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#tags DataTritonVolume#tags}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-triton.dataTritonVolume.DataTritonVolumeConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/d/volume#type DataTritonVolume#type}

---

### FabricConfig <a name="FabricConfig" id="@cdktf/provider-triton.fabric.FabricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.fabric.FabricConfig.Initializer"></a>

```typescript
import { fabric } from '@cdktf/provider-triton'

const fabricConfig: fabric.FabricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.name">name</a></code> | <code>string</code> | Network name. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.provisionEndIp">provisionEndIp</a></code> | <code>string</code> | Last assignable IP on the network. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.provisionStartIp">provisionStartIp</a></code> | <code>string</code> | First IP on the network that can be assigned. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.subnet">subnet</a></code> | <code>string</code> | CIDR formatted string describing network address space. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.vlanId">vlanId</a></code> | <code>number</code> | VLAN on which the network exists. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.description">description</a></code> | <code>string</code> | Description of network. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.gateway">gateway</a></code> | <code>string</code> | Gateway IP. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#id Fabric#id}. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.internetNat">internetNat</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not a NAT zone is provisioned at the Gateway IP address. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.resolvers">resolvers</a></code> | <code>string[]</code> | List of IP addresses for DNS resolvers. |
| <code><a href="#@cdktf/provider-triton.fabric.FabricConfig.property.routes">routes</a></code> | <code>{[ key: string ]: string}</code> | Map of CIDR block to Gateway IP address. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.fabric.FabricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.fabric.FabricConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.fabric.FabricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.fabric.FabricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.fabric.FabricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.fabric.FabricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.fabric.FabricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.fabric.FabricConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Network name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#name Fabric#name}

---

##### `provisionEndIp`<sup>Required</sup> <a name="provisionEndIp" id="@cdktf/provider-triton.fabric.FabricConfig.property.provisionEndIp"></a>

```typescript
public readonly provisionEndIp: string;
```

- *Type:* string

Last assignable IP on the network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#provision_end_ip Fabric#provision_end_ip}

---

##### `provisionStartIp`<sup>Required</sup> <a name="provisionStartIp" id="@cdktf/provider-triton.fabric.FabricConfig.property.provisionStartIp"></a>

```typescript
public readonly provisionStartIp: string;
```

- *Type:* string

First IP on the network that can be assigned.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#provision_start_ip Fabric#provision_start_ip}

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-triton.fabric.FabricConfig.property.subnet"></a>

```typescript
public readonly subnet: string;
```

- *Type:* string

CIDR formatted string describing network address space.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#subnet Fabric#subnet}

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.fabric.FabricConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

VLAN on which the network exists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#vlan_id Fabric#vlan_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-triton.fabric.FabricConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of network.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#description Fabric#description}

---

##### `gateway`<sup>Optional</sup> <a name="gateway" id="@cdktf/provider-triton.fabric.FabricConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Gateway IP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#gateway Fabric#gateway}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.fabric.FabricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#id Fabric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetNat`<sup>Optional</sup> <a name="internetNat" id="@cdktf/provider-triton.fabric.FabricConfig.property.internetNat"></a>

```typescript
public readonly internetNat: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not a NAT zone is provisioned at the Gateway IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#internet_nat Fabric#internet_nat}

---

##### `resolvers`<sup>Optional</sup> <a name="resolvers" id="@cdktf/provider-triton.fabric.FabricConfig.property.resolvers"></a>

```typescript
public readonly resolvers: string[];
```

- *Type:* string[]

List of IP addresses for DNS resolvers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#resolvers Fabric#resolvers}

---

##### `routes`<sup>Optional</sup> <a name="routes" id="@cdktf/provider-triton.fabric.FabricConfig.property.routes"></a>

```typescript
public readonly routes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of CIDR block to Gateway IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/fabric#routes Fabric#routes}

---

### FirewallRuleConfig <a name="FirewallRuleConfig" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.Initializer"></a>

```typescript
import { firewallRule } from '@cdktf/provider-triton'

const firewallRuleConfig: firewallRule.FirewallRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.rule">rule</a></code> | <code>string</code> | firewall rule text. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the rule. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the rule is enabled. |
| <code><a href="#@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule#id FirewallRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

firewall rule text.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule#rule FirewallRule#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule#description FirewallRule#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the rule is enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule#enabled FirewallRule#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.firewallRule.FirewallRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/firewall_rule#id FirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### InstanceTemplateConfig <a name="InstanceTemplateConfig" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.Initializer"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

const instanceTemplateConfig: instanceTemplate.InstanceTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.image">image</a></code> | <code>string</code> | UUID of the image. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.package">package</a></code> | <code>string</code> | Package name used for provisioning. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.templateName">templateName</a></code> | <code>string</code> | Friendly name for the instance template. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.firewallEnabled">firewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the firewall for group instances. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#id InstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata for group instances. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.networks">networks</a></code> | <code>string[]</code> | Network IDs for group instances. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Tags for group instances. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts</code> | timeouts block. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.userdata">userdata</a></code> | <code>string</code> | Data copied to instance on boot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

UUID of the image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#image InstanceTemplate#image}

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Package name used for provisioning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#package InstanceTemplate#package}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Friendly name for the instance template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#template_name InstanceTemplate#template_name}

---

##### `firewallEnabled`<sup>Optional</sup> <a name="firewallEnabled" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.firewallEnabled"></a>

```typescript
public readonly firewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the firewall for group instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#firewall_enabled InstanceTemplate#firewall_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#id InstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata for group instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#metadata InstanceTemplate#metadata}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

Network IDs for group instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#networks InstanceTemplate#networks}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Tags for group instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#tags InstanceTemplate#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: InstanceTemplateTimeouts;
```

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#timeouts InstanceTemplate#timeouts}

---

##### `userdata`<sup>Optional</sup> <a name="userdata" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateConfig.property.userdata"></a>

```typescript
public readonly userdata: string;
```

- *Type:* string

Data copied to instance on boot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#userdata InstanceTemplate#userdata}

---

### InstanceTemplateTimeouts <a name="InstanceTemplateTimeouts" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.Initializer"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

const instanceTemplateTimeouts: instanceTemplate.InstanceTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#create InstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#delete InstanceTemplate#delete}. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#read InstanceTemplate#read}. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#update InstanceTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#create InstanceTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#delete InstanceTemplate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#read InstanceTemplate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/instance_template#update InstanceTemplate#update}.

---

### KeyConfig <a name="KeyConfig" id="@cdktf/provider-triton.key.KeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.key.KeyConfig.Initializer"></a>

```typescript
import { key } from '@cdktf/provider-triton'

const keyConfig: key.KeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.key">key</a></code> | <code>string</code> | Content of public key from disk in OpenSSH format. |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#id Key#id}. |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.name">name</a></code> | <code>string</code> | Name of the key (generated from the key comment if not set). |
| <code><a href="#@cdktf/provider-triton.key.KeyConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.key.KeyTimeouts</code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.key.KeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.key.KeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.key.KeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.key.KeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.key.KeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.key.KeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.key.KeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-triton.key.KeyConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Content of public key from disk in OpenSSH format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#key Key#key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.key.KeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#id Key#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.key.KeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the key (generated from the key comment if not set).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#name Key#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.key.KeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyTimeouts;
```

- *Type:* @cdktf/provider-triton.key.KeyTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#timeouts Key#timeouts}

---

### KeyTimeouts <a name="KeyTimeouts" id="@cdktf/provider-triton.key.KeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.key.KeyTimeouts.Initializer"></a>

```typescript
import { key } from '@cdktf/provider-triton'

const keyTimeouts: key.KeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#create Key#create}. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#delete Key#delete}. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#read Key#read}. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#update Key#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.key.KeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#create Key#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.key.KeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#delete Key#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.key.KeyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#read Key#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.key.KeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/key#update Key#update}.

---

### MachineCns <a name="MachineCns" id="@cdktf/provider-triton.machine.MachineCns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineCns.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineCns: machine.MachineCns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineCns.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable CNS for this instance (after create). |
| <code><a href="#@cdktf/provider-triton.machine.MachineCns.property.services">services</a></code> | <code>string[]</code> | Assign CNS service names to this instance. |

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-triton.machine.MachineCns.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable CNS for this instance (after create).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#disable Machine#disable}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-triton.machine.MachineCns.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

Assign CNS service names to this instance.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#services Machine#services}

---

### MachineConfig <a name="MachineConfig" id="@cdktf/provider-triton.machine.MachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineConfig.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineConfig: machine.MachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.image">image</a></code> | <code>string</code> | UUID of the image. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.package">package</a></code> | <code>string</code> | The package for use for provisioning. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.administratorPw">administratorPw</a></code> | <code>string</code> | Administrator's initial password (Windows only). |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.affinity">affinity</a></code> | <code>string[]</code> | Label based affinity rules for assisting instance placement. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.cloudConfig">cloudConfig</a></code> | <code>string</code> | copied to machine on boot. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.cns">cns</a></code> | <code>@cdktf/provider-triton.machine.MachineCns</code> | cns block. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.delegateDataset">delegateDataset</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to create a delegate dataset for this machine. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable deletion protection for this machine. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.firewallEnabled">firewallEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable the firewall for this machine. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#id Machine#id}. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.locality">locality</a></code> | <code>@cdktf/provider-triton.machine.MachineLocality</code> | locality block. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Machine metadata. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.name">name</a></code> | <code>string</code> | Friendly name for machine. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.networks">networks</a></code> | <code>string[]</code> | Desired network IDs. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.nic">nic</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineNic[]</code> | nic block. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.rootAuthorizedKeys">rootAuthorizedKeys</a></code> | <code>string</code> | Authorized keys for the root user on this machine. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Machine tags. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.machine.MachineTimeouts</code> | timeouts block. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.userData">userData</a></code> | <code>string</code> | Data copied to machine on boot. |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.userScript">userScript</a></code> | <code>string</code> | User script to run on boot (every boot on SmartMachines). |
| <code><a href="#@cdktf/provider-triton.machine.MachineConfig.property.volume">volume</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineVolume[]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.machine.MachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.machine.MachineConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.machine.MachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.machine.MachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.machine.MachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.machine.MachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.machine.MachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-triton.machine.MachineConfig.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

UUID of the image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#image Machine#image}

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-triton.machine.MachineConfig.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

The package for use for provisioning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#package Machine#package}

---

##### `administratorPw`<sup>Optional</sup> <a name="administratorPw" id="@cdktf/provider-triton.machine.MachineConfig.property.administratorPw"></a>

```typescript
public readonly administratorPw: string;
```

- *Type:* string

Administrator's initial password (Windows only).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#administrator_pw Machine#administrator_pw}

---

##### `affinity`<sup>Optional</sup> <a name="affinity" id="@cdktf/provider-triton.machine.MachineConfig.property.affinity"></a>

```typescript
public readonly affinity: string[];
```

- *Type:* string[]

Label based affinity rules for assisting instance placement.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#affinity Machine#affinity}

---

##### `cloudConfig`<sup>Optional</sup> <a name="cloudConfig" id="@cdktf/provider-triton.machine.MachineConfig.property.cloudConfig"></a>

```typescript
public readonly cloudConfig: string;
```

- *Type:* string

copied to machine on boot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#cloud_config Machine#cloud_config}

---

##### `cns`<sup>Optional</sup> <a name="cns" id="@cdktf/provider-triton.machine.MachineConfig.property.cns"></a>

```typescript
public readonly cns: MachineCns;
```

- *Type:* @cdktf/provider-triton.machine.MachineCns

cns block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#cns Machine#cns}

---

##### `delegateDataset`<sup>Optional</sup> <a name="delegateDataset" id="@cdktf/provider-triton.machine.MachineConfig.property.delegateDataset"></a>

```typescript
public readonly delegateDataset: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to create a delegate dataset for this machine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#delegate_dataset Machine#delegate_dataset}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-triton.machine.MachineConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable deletion protection for this machine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#deletion_protection_enabled Machine#deletion_protection_enabled}

---

##### `firewallEnabled`<sup>Optional</sup> <a name="firewallEnabled" id="@cdktf/provider-triton.machine.MachineConfig.property.firewallEnabled"></a>

```typescript
public readonly firewallEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable the firewall for this machine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#firewall_enabled Machine#firewall_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.machine.MachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#id Machine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-triton.machine.MachineConfig.property.locality"></a>

```typescript
public readonly locality: MachineLocality;
```

- *Type:* @cdktf/provider-triton.machine.MachineLocality

locality block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#locality Machine#locality}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-triton.machine.MachineConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Machine metadata.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#metadata Machine#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.machine.MachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name for machine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#name Machine#name}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-triton.machine.MachineConfig.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

Desired network IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#networks Machine#networks}

---

##### `nic`<sup>Optional</sup> <a name="nic" id="@cdktf/provider-triton.machine.MachineConfig.property.nic"></a>

```typescript
public readonly nic: IResolvable | MachineNic[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineNic[]

nic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#nic Machine#nic}

---

##### `rootAuthorizedKeys`<sup>Optional</sup> <a name="rootAuthorizedKeys" id="@cdktf/provider-triton.machine.MachineConfig.property.rootAuthorizedKeys"></a>

```typescript
public readonly rootAuthorizedKeys: string;
```

- *Type:* string

Authorized keys for the root user on this machine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#root_authorized_keys Machine#root_authorized_keys}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-triton.machine.MachineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Machine tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#tags Machine#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.machine.MachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineTimeouts;
```

- *Type:* @cdktf/provider-triton.machine.MachineTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#timeouts Machine#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-triton.machine.MachineConfig.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Data copied to machine on boot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#user_data Machine#user_data}

---

##### `userScript`<sup>Optional</sup> <a name="userScript" id="@cdktf/provider-triton.machine.MachineConfig.property.userScript"></a>

```typescript
public readonly userScript: string;
```

- *Type:* string

User script to run on boot (every boot on SmartMachines).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#user_script Machine#user_script}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-triton.machine.MachineConfig.property.volume"></a>

```typescript
public readonly volume: IResolvable | MachineVolume[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineVolume[]

volume block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#volume Machine#volume}

---

### MachineLocality <a name="MachineLocality" id="@cdktf/provider-triton.machine.MachineLocality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineLocality.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineLocality: machine.MachineLocality = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocality.property.closeTo">closeTo</a></code> | <code>string[]</code> | UUIDs of other instances to attempt to provision alongside. |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocality.property.farFrom">farFrom</a></code> | <code>string[]</code> | UUIDs of other instances to attempt not to provision alongside. |

---

##### `closeTo`<sup>Optional</sup> <a name="closeTo" id="@cdktf/provider-triton.machine.MachineLocality.property.closeTo"></a>

```typescript
public readonly closeTo: string[];
```

- *Type:* string[]

UUIDs of other instances to attempt to provision alongside.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#close_to Machine#close_to}

---

##### `farFrom`<sup>Optional</sup> <a name="farFrom" id="@cdktf/provider-triton.machine.MachineLocality.property.farFrom"></a>

```typescript
public readonly farFrom: string[];
```

- *Type:* string[]

UUIDs of other instances to attempt not to provision alongside.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#far_from Machine#far_from}

---

### MachineNic <a name="MachineNic" id="@cdktf/provider-triton.machine.MachineNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineNic.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineNic: machine.MachineNic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNic.property.network">network</a></code> | <code>string</code> | ID of the network to which the NIC is attached. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-triton.machine.MachineNic.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

ID of the network to which the NIC is attached.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#network Machine#network}

---

### MachineTimeouts <a name="MachineTimeouts" id="@cdktf/provider-triton.machine.MachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineTimeouts.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineTimeouts: machine.MachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#create Machine#create}. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#delete Machine#delete}. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#read Machine#read}. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#update Machine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.machine.MachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#create Machine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.machine.MachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#delete Machine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.machine.MachineTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#read Machine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.machine.MachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#update Machine#update}.

---

### MachineVolume <a name="MachineVolume" id="@cdktf/provider-triton.machine.MachineVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.machine.MachineVolume.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

const machineVolume: machine.MachineVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolume.property.mountpoint">mountpoint</a></code> | <code>string</code> | Where to attach the volume. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolume.property.name">name</a></code> | <code>string</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolume.property.mode">mode</a></code> | <code>string</code> | The volume attachment mode. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolume.property.type">type</a></code> | <code>string</code> | The type of volume. |

---

##### `mountpoint`<sup>Required</sup> <a name="mountpoint" id="@cdktf/provider-triton.machine.MachineVolume.property.mountpoint"></a>

```typescript
public readonly mountpoint: string;
```

- *Type:* string

Where to attach the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#mountpoint Machine#mountpoint}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.machine.MachineVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#name Machine#name}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-triton.machine.MachineVolume.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The volume attachment mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#mode Machine#mode}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-triton.machine.MachineVolume.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/machine#type Machine#type}

---

### ServiceGroupConfig <a name="ServiceGroupConfig" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.Initializer"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

const serviceGroupConfig: serviceGroup.ServiceGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | Friendly name for the service group. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.template">template</a></code> | <code>string</code> | Identifier of an instance template. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.capacity">capacity</a></code> | <code>number</code> | Number of instances to launch and monitor. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#id ServiceGroup#id}. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts</code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Friendly name for the service group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#group_name ServiceGroup#group_name}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Identifier of an instance template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#template ServiceGroup#template}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Number of instances to launch and monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#capacity ServiceGroup#capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#id ServiceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.serviceGroup.ServiceGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceGroupTimeouts;
```

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#timeouts ServiceGroup#timeouts}

---

### ServiceGroupTimeouts <a name="ServiceGroupTimeouts" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.Initializer"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

const serviceGroupTimeouts: serviceGroup.ServiceGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#create ServiceGroup#create}. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#delete ServiceGroup#delete}. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#read ServiceGroup#read}. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#update ServiceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#create ServiceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#delete ServiceGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#read ServiceGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/service_group#update ServiceGroup#update}.

---

### SnapshotConfig <a name="SnapshotConfig" id="@cdktf/provider-triton.snapshot.SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.snapshot.SnapshotConfig.Initializer"></a>

```typescript
import { snapshot } from '@cdktf/provider-triton'

const snapshotConfig: snapshot.SnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.machineId">machineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#machine_id Snapshot#machine_id}. |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#name Snapshot#name}. |
| <code><a href="#@cdktf/provider-triton.snapshot.SnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#id Snapshot#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `machineId`<sup>Required</sup> <a name="machineId" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.machineId"></a>

```typescript
public readonly machineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#machine_id Snapshot#machine_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#name Snapshot#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.snapshot.SnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/snapshot#id Snapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TritonProviderConfig <a name="TritonProviderConfig" id="@cdktf/provider-triton.provider.TritonProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.provider.TritonProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-triton'

const tritonProviderConfig: provider.TritonProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.account">account</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#account TritonProvider#account}. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.insecureSkipTlsVerify">insecureSkipTlsVerify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#insecure_skip_tls_verify TritonProvider#insecure_skip_tls_verify}. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#key_id TritonProvider#key_id}. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.keyMaterial">keyMaterial</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#key_material TritonProvider#key_material}. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#url TritonProvider#url}. |
| <code><a href="#@cdktf/provider-triton.provider.TritonProviderConfig.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#user TritonProvider#user}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#account TritonProvider#account}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#alias TritonProvider#alias}

---

##### `insecureSkipTlsVerify`<sup>Optional</sup> <a name="insecureSkipTlsVerify" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.insecureSkipTlsVerify"></a>

```typescript
public readonly insecureSkipTlsVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#insecure_skip_tls_verify TritonProvider#insecure_skip_tls_verify}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#key_id TritonProvider#key_id}.

---

##### `keyMaterial`<sup>Optional</sup> <a name="keyMaterial" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.keyMaterial"></a>

```typescript
public readonly keyMaterial: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#key_material TritonProvider#key_material}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#url TritonProvider#url}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-triton.provider.TritonProviderConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton#user TritonProvider#user}.

---

### VlanConfig <a name="VlanConfig" id="@cdktf/provider-triton.vlan.VlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.vlan.VlanConfig.Initializer"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

const vlanConfig: vlan.VlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.name">name</a></code> | <code>string</code> | Unique name to identify VLAN. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.vlanId">vlanId</a></code> | <code>number</code> | Number between 0-4095 indicating VLAN ID. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.description">description</a></code> | <code>string</code> | Description of the VLAN. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#id Vlan#id}. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.vlan.VlanTimeouts</code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.vlan.VlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.vlan.VlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.vlan.VlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.vlan.VlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.vlan.VlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.vlan.VlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.vlan.VlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.vlan.VlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name to identify VLAN.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#name Vlan#name}

---

##### `vlanId`<sup>Required</sup> <a name="vlanId" id="@cdktf/provider-triton.vlan.VlanConfig.property.vlanId"></a>

```typescript
public readonly vlanId: number;
```

- *Type:* number

Number between 0-4095 indicating VLAN ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#vlan_id Vlan#vlan_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-triton.vlan.VlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the VLAN.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#description Vlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.vlan.VlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#id Vlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.vlan.VlanConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VlanTimeouts;
```

- *Type:* @cdktf/provider-triton.vlan.VlanTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#timeouts Vlan#timeouts}

---

### VlanTimeouts <a name="VlanTimeouts" id="@cdktf/provider-triton.vlan.VlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.vlan.VlanTimeouts.Initializer"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

const vlanTimeouts: vlan.VlanTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#create Vlan#create}. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#delete Vlan#delete}. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#read Vlan#read}. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#update Vlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.vlan.VlanTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#create Vlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.vlan.VlanTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#delete Vlan#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.vlan.VlanTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#read Vlan#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.vlan.VlanTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/vlan#update Vlan#update}.

---

### VolumeConfig <a name="VolumeConfig" id="@cdktf/provider-triton.volume.VolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.volume.VolumeConfig.Initializer"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

const volumeConfig: volume.VolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#id Volume#id}. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.name">name</a></code> | <code>string</code> | Friendly name for volume. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.networks">networks</a></code> | <code>string[]</code> | Desired network IDs. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.size">size</a></code> | <code>number</code> | The size of the volume (Mb). |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Volume tags. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-triton.volume.VolumeTimeouts</code> | timeouts block. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeConfig.property.type">type</a></code> | <code>string</code> | Type of volume. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-triton.volume.VolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-triton.volume.VolumeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-triton.volume.VolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-triton.volume.VolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-triton.volume.VolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-triton.volume.VolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-triton.volume.VolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-triton.volume.VolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#id Volume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-triton.volume.VolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Friendly name for volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#name Volume#name}

---

##### `networks`<sup>Optional</sup> <a name="networks" id="@cdktf/provider-triton.volume.VolumeConfig.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

Desired network IDs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#networks Volume#networks}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-triton.volume.VolumeConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

The size of the volume (Mb).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#size Volume#size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-triton.volume.VolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Volume tags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#tags Volume#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-triton.volume.VolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VolumeTimeouts;
```

- *Type:* @cdktf/provider-triton.volume.VolumeTimeouts

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#timeouts Volume#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-triton.volume.VolumeConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#type Volume#type}

---

### VolumeTimeouts <a name="VolumeTimeouts" id="@cdktf/provider-triton.volume.VolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-triton.volume.VolumeTimeouts.Initializer"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

const volumeTimeouts: volume.VolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#create Volume#create}. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#delete Volume#delete}. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#read Volume#read}. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#update Volume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-triton.volume.VolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#create Volume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-triton.volume.VolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#delete Volume#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-triton.volume.VolumeTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#read Volume#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-triton.volume.VolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/triton/r/volume#update Volume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataTritonPackageFilterList <a name="DataTritonPackageFilterList" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

new dataTritonPackage.DataTritonPackageFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.get"></a>

```typescript
public get(index: number): DataTritonPackageFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataTritonPackageFilter[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter[]

---


### DataTritonPackageFilterOutputReference <a name="DataTritonPackageFilterOutputReference" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer"></a>

```typescript
import { dataTritonPackage } from '@cdktf/provider-triton'

new dataTritonPackage.DataTritonPackageFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetLwps">resetLwps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetSwap">resetSwap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetVcpus">resetVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetDisk"></a>

```typescript
public resetDisk(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetLwps` <a name="resetLwps" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetLwps"></a>

```typescript
public resetLwps(): void
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetMemory"></a>

```typescript
public resetMemory(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSwap` <a name="resetSwap" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetSwap"></a>

```typescript
public resetSwap(): void
```

##### `resetVcpus` <a name="resetVcpus" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetVcpus"></a>

```typescript
public resetVcpus(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.diskInput">diskInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.lwpsInput">lwpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.memoryInput">memoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.swapInput">swapInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.vcpusInput">vcpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.disk">disk</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.lwps">lwps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.swap">swap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.vcpus">vcpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.diskInput"></a>

```typescript
public readonly diskInput: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `lwpsInput`<sup>Optional</sup> <a name="lwpsInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.lwpsInput"></a>

```typescript
public readonly lwpsInput: number;
```

- *Type:* number

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.memoryInput"></a>

```typescript
public readonly memoryInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `swapInput`<sup>Optional</sup> <a name="swapInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.swapInput"></a>

```typescript
public readonly swapInput: number;
```

- *Type:* number

---

##### `vcpusInput`<sup>Optional</sup> <a name="vcpusInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.vcpusInput"></a>

```typescript
public readonly vcpusInput: number;
```

- *Type:* number

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.disk"></a>

```typescript
public readonly disk: number;
```

- *Type:* number

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `lwps`<sup>Required</sup> <a name="lwps" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.lwps"></a>

```typescript
public readonly lwps: number;
```

- *Type:* number

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `swap`<sup>Required</sup> <a name="swap" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.swap"></a>

```typescript
public readonly swap: number;
```

- *Type:* number

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.vcpus"></a>

```typescript
public readonly vcpus: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataTritonPackageFilter | IResolvable;
```

- *Type:* @cdktf/provider-triton.dataTritonPackage.DataTritonPackageFilter | cdktf.IResolvable

---


### InstanceTemplateTimeoutsOutputReference <a name="InstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { instanceTemplate } from '@cdktf/provider-triton'

new instanceTemplate.InstanceTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InstanceTemplateTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.instanceTemplate.InstanceTemplateTimeouts | cdktf.IResolvable

---


### KeyTimeoutsOutputReference <a name="KeyTimeoutsOutputReference" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { key } from '@cdktf/provider-triton'

new key.KeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.key.KeyTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.key.KeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KeyTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.key.KeyTimeouts | cdktf.IResolvable

---


### MachineCnsOutputReference <a name="MachineCnsOutputReference" id="@cdktf/provider-triton.machine.MachineCnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineCnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.resetDisable">resetDisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.resetServices">resetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisable` <a name="resetDisable" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.resetDisable"></a>

```typescript
public resetDisable(): void
```

##### `resetServices` <a name="resetServices" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.resetServices"></a>

```typescript
public resetServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.disableInput">disableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.disable">disable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineCnsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.machine.MachineCns</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableInput`<sup>Optional</sup> <a name="disableInput" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.disableInput"></a>

```typescript
public readonly disableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.disable"></a>

```typescript
public readonly disable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineCnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineCns;
```

- *Type:* @cdktf/provider-triton.machine.MachineCns

---


### MachineLocalityOutputReference <a name="MachineLocalityOutputReference" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineLocalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.resetCloseTo">resetCloseTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.resetFarFrom">resetFarFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloseTo` <a name="resetCloseTo" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.resetCloseTo"></a>

```typescript
public resetCloseTo(): void
```

##### `resetFarFrom` <a name="resetFarFrom" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.resetFarFrom"></a>

```typescript
public resetFarFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.closeToInput">closeToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.farFromInput">farFromInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.closeTo">closeTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.farFrom">farFrom</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.machine.MachineLocality</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `closeToInput`<sup>Optional</sup> <a name="closeToInput" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.closeToInput"></a>

```typescript
public readonly closeToInput: string[];
```

- *Type:* string[]

---

##### `farFromInput`<sup>Optional</sup> <a name="farFromInput" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.farFromInput"></a>

```typescript
public readonly farFromInput: string[];
```

- *Type:* string[]

---

##### `closeTo`<sup>Required</sup> <a name="closeTo" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.closeTo"></a>

```typescript
public readonly closeTo: string[];
```

- *Type:* string[]

---

##### `farFrom`<sup>Required</sup> <a name="farFrom" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.farFrom"></a>

```typescript
public readonly farFrom: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineLocalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLocality;
```

- *Type:* @cdktf/provider-triton.machine.MachineLocality

---


### MachineNicList <a name="MachineNicList" id="@cdktf/provider-triton.machine.MachineNicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineNicList.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineNicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-triton.machine.MachineNicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineNicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineNicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineNicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineNicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-triton.machine.MachineNicList.get"></a>

```typescript
public get(index: number): MachineNicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-triton.machine.MachineNicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineNic[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineNicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineNicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineNicList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineNic[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineNic[]

---


### MachineNicOutputReference <a name="MachineNicOutputReference" id="@cdktf/provider-triton.machine.MachineNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineNicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-triton.machine.MachineNicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineNicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.MachineNicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.machine.MachineNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineNicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineNicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.netmask">netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.primary">primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineNicOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.machine.MachineNic \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `netmask`<sup>Required</sup> <a name="netmask" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.netmask"></a>

```typescript
public readonly netmask: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineNicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineNic | IResolvable;
```

- *Type:* @cdktf/provider-triton.machine.MachineNic | cdktf.IResolvable

---


### MachineTimeoutsOutputReference <a name="MachineTimeoutsOutputReference" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.machine.MachineTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.machine.MachineTimeouts | cdktf.IResolvable

---


### MachineVolumeList <a name="MachineVolumeList" id="@cdktf/provider-triton.machine.MachineVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineVolumeList.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineVolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-triton.machine.MachineVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineVolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineVolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineVolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-triton.machine.MachineVolumeList.get"></a>

```typescript
public get(index: number): MachineVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-triton.machine.MachineVolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-triton.machine.MachineVolume[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineVolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineVolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineVolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineVolume[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-triton.machine.MachineVolume[]

---


### MachineVolumeOutputReference <a name="MachineVolumeOutputReference" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer"></a>

```typescript
import { machine } from '@cdktf/provider-triton'

new machine.MachineVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mountpointInput">mountpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mountpoint">mountpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.machine.MachineVolume \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mountpointInput`<sup>Optional</sup> <a name="mountpointInput" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mountpointInput"></a>

```typescript
public readonly mountpointInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `mountpoint`<sup>Required</sup> <a name="mountpoint" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.mountpoint"></a>

```typescript
public readonly mountpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.machine.MachineVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineVolume | IResolvable;
```

- *Type:* @cdktf/provider-triton.machine.MachineVolume | cdktf.IResolvable

---


### ServiceGroupTimeoutsOutputReference <a name="ServiceGroupTimeoutsOutputReference" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceGroup } from '@cdktf/provider-triton'

new serviceGroup.ServiceGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.serviceGroup.ServiceGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceGroupTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.serviceGroup.ServiceGroupTimeouts | cdktf.IResolvable

---


### VlanTimeoutsOutputReference <a name="VlanTimeoutsOutputReference" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.Initializer"></a>

```typescript
import { vlan } from '@cdktf/provider-triton'

new vlan.VlanTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.vlan.VlanTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.vlan.VlanTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VlanTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.vlan.VlanTimeouts | cdktf.IResolvable

---


### VolumeTimeoutsOutputReference <a name="VolumeTimeoutsOutputReference" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { volume } from '@cdktf/provider-triton'

new volume.VolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>@cdktf/provider-triton.volume.VolumeTimeouts \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-triton.volume.VolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VolumeTimeouts | IResolvable;
```

- *Type:* @cdktf/provider-triton.volume.VolumeTimeouts | cdktf.IResolvable

---



