import { 
  users, type User, type InsertUser,
  projects, type Project, type InsertProject,
  projectImages, type ProjectImage, type InsertProjectImage,
  projectLinks, type ProjectLink, type InsertProjectLink,
  certifications, type Certification, type InsertCertification,
  certificationCredentials, type CertificationCredential, type InsertCertificationCredential,
  skillCategories, type SkillCategory, type InsertSkillCategory,
  skills, type Skill, type InsertSkill,
  messages, type Message, type InsertMessage
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getProjects(userId: number): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Project Image methods
  getProjectImages(projectId: number): Promise<ProjectImage[]>;
  createProjectImage(image: InsertProjectImage): Promise<ProjectImage>;
  deleteProjectImage(id: number): Promise<boolean>;
  
  // Project Link methods
  getProjectLinks(projectId: number): Promise<ProjectLink[]>;
  createProjectLink(link: InsertProjectLink): Promise<ProjectLink>;
  deleteProjectLink(id: number): Promise<boolean>;
  
  // Certification methods
  getCertifications(userId: number): Promise<Certification[]>;
  getCertification(id: number): Promise<Certification | undefined>;
  createCertification(certification: InsertCertification): Promise<Certification>;
  updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined>;
  deleteCertification(id: number): Promise<boolean>;
  
  // Certification Credential methods
  getCertificationCredentials(certificationId: number): Promise<CertificationCredential[]>;
  createCertificationCredential(credential: InsertCertificationCredential): Promise<CertificationCredential>;
  deleteCertificationCredential(id: number): Promise<boolean>;
  
  // Skill Category methods
  getSkillCategories(userId: number): Promise<SkillCategory[]>;
  getSkillCategory(id: number): Promise<SkillCategory | undefined>;
  createSkillCategory(category: InsertSkillCategory): Promise<SkillCategory>;
  updateSkillCategory(id: number, category: Partial<InsertSkillCategory>): Promise<SkillCategory | undefined>;
  deleteSkillCategory(id: number): Promise<boolean>;
  
  // Skill methods
  getSkills(categoryId: number): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  deleteSkill(id: number): Promise<boolean>;
  
  // Message methods
  getMessages(userId: number): Promise<Message[]>;
  getMessage(id: number): Promise<Message | undefined>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessageAsRead(id: number): Promise<Message | undefined>;
  deleteMessage(id: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Project methods
  async getProjects(userId: number): Promise<Project[]> {
    return await db.select().from(projects).where(eq(projects.userId, userId));
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db
      .update(projects)
      .set(project)
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    const result = await db.delete(projects).where(eq(projects.id, id));
    return true;
  }
  
  // Project Image methods
  async getProjectImages(projectId: number): Promise<ProjectImage[]> {
    return await db.select().from(projectImages).where(eq(projectImages.projectId, projectId));
  }
  
  async createProjectImage(image: InsertProjectImage): Promise<ProjectImage> {
    const [newImage] = await db.insert(projectImages).values(image).returning();
    return newImage;
  }
  
  async deleteProjectImage(id: number): Promise<boolean> {
    const result = await db.delete(projectImages).where(eq(projectImages.id, id));
    return true;
  }
  
  // Project Link methods
  async getProjectLinks(projectId: number): Promise<ProjectLink[]> {
    return await db.select().from(projectLinks).where(eq(projectLinks.projectId, projectId));
  }
  
  async createProjectLink(link: InsertProjectLink): Promise<ProjectLink> {
    const [newLink] = await db.insert(projectLinks).values(link).returning();
    return newLink;
  }
  
  async deleteProjectLink(id: number): Promise<boolean> {
    const result = await db.delete(projectLinks).where(eq(projectLinks.id, id));
    return true;
  }
  
  // Certification methods
  async getCertifications(userId: number): Promise<Certification[]> {
    return await db.select().from(certifications).where(eq(certifications.userId, userId));
  }
  
  async getCertification(id: number): Promise<Certification | undefined> {
    const [certification] = await db.select().from(certifications).where(eq(certifications.id, id));
    return certification;
  }
  
  async createCertification(certification: InsertCertification): Promise<Certification> {
    const [newCertification] = await db.insert(certifications).values(certification).returning();
    return newCertification;
  }
  
  async updateCertification(id: number, certification: Partial<InsertCertification>): Promise<Certification | undefined> {
    const [updatedCertification] = await db
      .update(certifications)
      .set(certification)
      .where(eq(certifications.id, id))
      .returning();
    return updatedCertification;
  }
  
  async deleteCertification(id: number): Promise<boolean> {
    const result = await db.delete(certifications).where(eq(certifications.id, id));
    return true;
  }
  
  // Certification Credential methods
  async getCertificationCredentials(certificationId: number): Promise<CertificationCredential[]> {
    return await db.select().from(certificationCredentials).where(eq(certificationCredentials.certificationId, certificationId));
  }
  
  async createCertificationCredential(credential: InsertCertificationCredential): Promise<CertificationCredential> {
    const [newCredential] = await db.insert(certificationCredentials).values(credential).returning();
    return newCredential;
  }
  
  async deleteCertificationCredential(id: number): Promise<boolean> {
    const result = await db.delete(certificationCredentials).where(eq(certificationCredentials.id, id));
    return true;
  }
  
  // Skill Category methods
  async getSkillCategories(userId: number): Promise<SkillCategory[]> {
    return await db.select().from(skillCategories).where(eq(skillCategories.userId, userId));
  }
  
  async getSkillCategory(id: number): Promise<SkillCategory | undefined> {
    const [category] = await db.select().from(skillCategories).where(eq(skillCategories.id, id));
    return category;
  }
  
  async createSkillCategory(category: InsertSkillCategory): Promise<SkillCategory> {
    const [newCategory] = await db.insert(skillCategories).values(category).returning();
    return newCategory;
  }
  
  async updateSkillCategory(id: number, category: Partial<InsertSkillCategory>): Promise<SkillCategory | undefined> {
    const [updatedCategory] = await db
      .update(skillCategories)
      .set(category)
      .where(eq(skillCategories.id, id))
      .returning();
    return updatedCategory;
  }
  
  async deleteSkillCategory(id: number): Promise<boolean> {
    const result = await db.delete(skillCategories).where(eq(skillCategories.id, id));
    return true;
  }
  
  // Skill methods
  async getSkills(categoryId: number): Promise<Skill[]> {
    return await db.select().from(skills).where(eq(skills.categoryId, categoryId));
  }
  
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }
  
  async deleteSkill(id: number): Promise<boolean> {
    const result = await db.delete(skills).where(eq(skills.id, id));
    return true;
  }
  
  // Message methods
  async getMessages(userId: number): Promise<Message[]> {
    return await db.select().from(messages).where(eq(messages.userId, userId));
  }
  
  async getMessage(id: number): Promise<Message | undefined> {
    const [message] = await db.select().from(messages).where(eq(messages.id, id));
    return message;
  }
  
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
  
  async markMessageAsRead(id: number): Promise<Message | undefined> {
    const [updatedMessage] = await db
      .update(messages)
      .set({ isRead: true })
      .where(eq(messages.id, id))
      .returning();
    return updatedMessage;
  }
  
  async deleteMessage(id: number): Promise<boolean> {
    const result = await db.delete(messages).where(eq(messages.id, id));
    return true;
  }
}

export const storage = new DatabaseStorage();
